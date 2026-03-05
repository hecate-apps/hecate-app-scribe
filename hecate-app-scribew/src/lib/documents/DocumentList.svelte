<svelte:options customElement={{ tag: "scribe-document-list", shadow: "none" }} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { listDocuments, createDocument, archiveDocument } from './documents.js';
	import type { Document } from './types.js';

	let { onSelect }: { onSelect: (id: string) => void } = $props();

	let documents = $state<Document[]>([]);
	let loading = $state(true);
	let creating = $state(false);

	onMount(() => refresh());

	async function refresh() {
		loading = true;
		try {
			documents = await listDocuments();
		} catch (e) {
			console.error('[scribe] Failed to list documents:', e);
		} finally {
			loading = false;
		}
	}

	async function handleCreate() {
		creating = true;
		try {
			const id = await createDocument('Untitled Document');
			await refresh();
			onSelect(id);
		} catch (e) {
			console.error('[scribe] Failed to create document:', e);
		} finally {
			creating = false;
		}
	}

	async function handleArchive(e: MouseEvent, id: string) {
		e.stopPropagation();
		try {
			await archiveDocument(id);
			await refresh();
		} catch (err) {
			console.error('[scribe] Failed to archive:', err);
		}
	}

	function formatDate(ts: string): string {
		const num = parseInt(ts, 10);
		if (isNaN(num)) return ts;
		return new Date(num).toLocaleDateString(undefined, {
			month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
		});
	}
</script>

<div class="flex flex-col h-full">
	<div class="flex items-center justify-between p-3 border-b border-zinc-800">
		<h2 class="text-sm font-semibold text-zinc-300">Documents</h2>
		<button
			onclick={handleCreate}
			disabled={creating}
			class="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded disabled:opacity-50"
		>
			{creating ? 'Creating...' : '+ New'}
		</button>
	</div>

	<div class="flex-1 overflow-auto">
		{#if loading}
			<div class="p-4 text-sm text-zinc-500">Loading...</div>
		{:else if documents.length === 0}
			<div class="p-4 text-center text-zinc-500">
				<p class="text-sm">No documents yet</p>
				<p class="text-xs mt-1">Create one to get started</p>
			</div>
		{:else}
			{#each documents as doc}
				<div
					role="button"
					tabindex="0"
					onclick={() => onSelect(doc.document_id)}
					onkeydown={(e) => { if (e.key === 'Enter') onSelect(doc.document_id); }}
					class="w-full text-left px-3 py-2 hover:bg-zinc-800 border-b border-zinc-900 group cursor-pointer"
				>
					<div class="flex items-center justify-between">
						<span class="text-sm text-zinc-200 truncate">{doc.title}</span>
						<button
							onclick={(e) => handleArchive(e, doc.document_id)}
							class="text-xs text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100"
							title="Archive"
						>
							&#x2715;
						</button>
					</div>
					<div class="text-xs text-zinc-600 mt-0.5">
						{formatDate(doc.updated_at)}
						{#if doc.content_size > 0}
							&middot; {Math.round(doc.content_size / 1024)}KB
						{/if}
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
