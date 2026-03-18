<svelte:options customElement={{ tag: "scribe-editor", shadow: "none" }} />

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import * as Y from 'yjs';
	import { createExtensions } from './extensions.js';
	import Toolbar from './toolbar/Toolbar.svelte';
	import { saveDocumentContent, getDocumentContent, getDocument, renameDocument } from '../documents/documents.js';

	let { documentId, onTitleChange }: {
		documentId: string;
		onTitleChange?: (title: string) => void;
	} = $props();

	let editor: Editor | null = $state(null);
	let editorElement: HTMLElement;
	let saving = $state(false);
	let charCount = $state(0);
	let saveTimeout: ReturnType<typeof setTimeout> | null = null;
	let ydoc: Y.Doc | null = null;

	let title = $state('');
	let editingTitle = $state(false);
	let titleInput = $state('');

	onMount(async () => {
		await loadDocument();
	});

	onDestroy(() => {
		if (saveTimeout) clearTimeout(saveTimeout);
		editor?.destroy();
		ydoc?.destroy();
	});

	async function loadDocument() {
		// Load title
		try {
			const doc = await getDocument(documentId);
			title = doc.title;
		} catch (e) {
			console.error('[scribe] Failed to load document:', e);
		}

		// Create Y.Doc and apply saved state
		ydoc = new Y.Doc();

		try {
			const data = await getDocumentContent(documentId);
			if (data.content && data.content !== '{}' && data.content !== '') {
				try {
					// Try as base64 Y.js state first (v0.3.0+ format)
					const binary = base64ToUint8Array(data.content);
					Y.applyUpdate(ydoc, binary);
				} catch {
					// Fall back to TipTap JSON (v0.2.x legacy)
					const parsed = JSON.parse(data.content);
					// Initialize editor with JSON content, Y.js will pick it up
					initEditor(ydoc, parsed);
					return;
				}
			}
		} catch (e) {
			console.error('[scribe] Failed to load content:', e);
		}

		initEditor(ydoc, null);
	}

	function initEditor(doc: Y.Doc, initialContent: any) {
		editor = new Editor({
			element: editorElement,
			extensions: createExtensions(doc),
			content: initialContent ?? '',
			editorProps: {
				attributes: {
					class: 'prose prose-invert max-w-none p-4 min-h-[400px] focus:outline-none'
				}
			},
			onUpdate: ({ editor: e }) => {
				charCount = e.storage.characterCount.characters();
				scheduleSave();
			}
		});
	}

	function startTitleEdit() {
		titleInput = title;
		editingTitle = true;
	}

	async function commitTitleEdit() {
		editingTitle = false;
		const newTitle = titleInput.trim();
		if (!newTitle || newTitle === title) return;
		try {
			await renameDocument(documentId, newTitle);
			title = newTitle;
			onTitleChange?.(newTitle);
		} catch (e) {
			console.error('[scribe] Failed to rename:', e);
		}
	}

	function handleTitleKey(e: KeyboardEvent) {
		if (e.key === 'Enter') commitTitleEdit();
		if (e.key === 'Escape') editingTitle = false;
	}

	function scheduleSave() {
		if (saveTimeout) clearTimeout(saveTimeout);
		saveTimeout = setTimeout(() => doSave(), 2000);
	}

	async function doSave() {
		if (!ydoc || saving) return;
		saving = true;
		try {
			const state = Y.encodeStateAsUpdate(ydoc);
			const base64 = uint8ArrayToBase64(state);
			await saveDocumentContent(documentId, base64);
		} catch (e) {
			console.error('[scribe] Failed to save:', e);
		} finally {
			saving = false;
		}
	}

	// --- Base64 helpers ---

	function uint8ArrayToBase64(bytes: Uint8Array): string {
		let binary = '';
		for (let i = 0; i < bytes.byteLength; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return btoa(binary);
	}

	function base64ToUint8Array(base64: string): Uint8Array {
		const binary = atob(base64);
		const bytes = new Uint8Array(binary.length);
		for (let i = 0; i < binary.length; i++) {
			bytes[i] = binary.charCodeAt(i);
		}
		return bytes;
	}
</script>

<div class="flex flex-col h-full bg-zinc-950 text-zinc-200">
	<div class="flex items-center gap-2 px-4 py-2 border-b border-zinc-800">
		{#if editingTitle}
			<!-- svelte-ignore a11y_autofocus -->
			<input
				type="text"
				bind:value={titleInput}
				onblur={commitTitleEdit}
				onkeydown={handleTitleKey}
				autofocus
				class="flex-1 text-sm font-semibold bg-zinc-800 text-zinc-200 border border-zinc-600 rounded px-2 py-1 outline-none focus:border-indigo-500"
			/>
		{:else}
			<button
				onclick={startTitleEdit}
				class="text-sm font-semibold text-zinc-300 hover:text-zinc-100 truncate text-left cursor-text"
				title="Click to rename"
			>
				{title || 'Untitled'}
			</button>
		{/if}
	</div>
	<Toolbar {editor} />
	<div class="flex-1 overflow-auto">
		<div bind:this={editorElement}></div>
	</div>
	<div class="flex items-center justify-between px-4 py-1 text-xs text-zinc-500 border-t border-zinc-800">
		<span>{charCount} characters</span>
		<span>{saving ? 'Saving...' : 'Saved'}</span>
	</div>
</div>

<style>
	:global(.tiptap) {
		min-height: 400px;
	}
	:global(.tiptap p.is-editor-empty:first-child::before) {
		color: #71717a;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
	:global(.tiptap h1) { font-size: 2rem; font-weight: 700; margin: 1rem 0 0.5rem; }
	:global(.tiptap h2) { font-size: 1.5rem; font-weight: 600; margin: 0.75rem 0 0.5rem; }
	:global(.tiptap h3) { font-size: 1.25rem; font-weight: 600; margin: 0.5rem 0 0.25rem; }
	:global(.tiptap ul) { list-style: disc; padding-left: 1.5rem; }
	:global(.tiptap ol) { list-style: decimal; padding-left: 1.5rem; }
	:global(.tiptap blockquote) {
		border-left: 3px solid #4f46e5;
		padding-left: 1rem;
		margin: 0.5rem 0;
		color: #a1a1aa;
	}
	:global(.tiptap pre) {
		background: #18181b;
		border-radius: 0.5rem;
		padding: 0.75rem;
		font-family: monospace;
		overflow-x: auto;
	}
	:global(.tiptap code) {
		background: #27272a;
		border-radius: 0.25rem;
		padding: 0.125rem 0.25rem;
		font-size: 0.875em;
	}
	:global(.tiptap hr) {
		border: none;
		border-top: 1px solid #3f3f46;
		margin: 1rem 0;
	}
</style>
