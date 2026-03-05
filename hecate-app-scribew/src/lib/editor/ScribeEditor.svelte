<svelte:options customElement={{ tag: "scribe-editor", shadow: "none" }} />

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import { createExtensions } from './extensions.js';
	import Toolbar from './toolbar/Toolbar.svelte';
	import { saveDocumentContent, getDocumentContent } from '../documents/documents.js';

	let { documentId, onTitleChange }: {
		documentId: string;
		onTitleChange?: (title: string) => void;
	} = $props();

	let editor: Editor | null = $state(null);
	let editorElement: HTMLElement;
	let saving = $state(false);
	let charCount = $state(0);
	let saveTimeout: ReturnType<typeof setTimeout> | null = null;

	onMount(async () => {
		editor = new Editor({
			element: editorElement,
			extensions: createExtensions(),
			content: '',
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

		await loadContent();
	});

	onDestroy(() => {
		if (saveTimeout) clearTimeout(saveTimeout);
		editor?.destroy();
	});

	async function loadContent() {
		try {
			const data = await getDocumentContent(documentId);
			if (data.content && data.content !== '{}' && data.content !== '') {
				const parsed = JSON.parse(data.content);
				editor?.commands.setContent(parsed);
			}
		} catch (e) {
			console.error('[scribe] Failed to load content:', e);
		}
	}

	function scheduleSave() {
		if (saveTimeout) clearTimeout(saveTimeout);
		saveTimeout = setTimeout(() => doSave(), 2000);
	}

	async function doSave() {
		if (!editor || saving) return;
		saving = true;
		try {
			const json = JSON.stringify(editor.getJSON());
			await saveDocumentContent(documentId, json);
		} catch (e) {
			console.error('[scribe] Failed to save:', e);
		} finally {
			saving = false;
		}
	}
</script>

<div class="flex flex-col h-full bg-zinc-950 text-zinc-200">
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
