<svelte:options customElement={{ tag: "scribe-studio", shadow: "none" }} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { setApi, type PluginApi } from './shared/api.js';
	import ScribeEditor from './editor/ScribeEditor.svelte';
	import { getDocument, createDocument } from './documents/documents.js';

	let { api, itemId }: { api: PluginApi; itemId?: string } = $props();

	let documentId = $state<string | null>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(async () => {
		setApi(api);
		await resolveDocument();
	});

	async function resolveDocument() {
		loading = true;
		error = null;

		// If item_id provided (from Briefcase), use it as document_id
		if (itemId) {
			try {
				// Check if document already exists in scribe's store
				await getDocument(itemId);
				documentId = itemId;
			} catch {
				// Document doesn't exist yet — create it with the briefcase item_id
				try {
					await createDocument('Untitled Document', itemId);
					documentId = itemId;
				} catch (e) {
					error = e instanceof Error ? e.message : 'Failed to initialize document';
				}
			}
		} else {
			error = 'no_item_id';
		}

		loading = false;
	}
</script>

<div class="flex h-full bg-zinc-950 text-zinc-200">
	{#if loading}
		<div class="flex-1 flex items-center justify-center">
			<div class="text-center text-zinc-500">
				<div class="text-2xl mb-2 animate-pulse">{'\u270F\uFE0F'}</div>
				<div class="text-sm">Loading document...</div>
			</div>
		</div>
	{:else if error === 'no_item_id'}
		<div class="flex-1 flex items-center justify-center">
			<div class="text-center text-zinc-400 max-w-sm space-y-3">
				<div class="text-3xl">{'\uD83D\uDCBC'}</div>
				<p class="text-sm">Open a document from Briefcase to start editing.</p>
				<p class="text-xs text-zinc-500">
					Go to Briefcase, create a new document, and click it to open in Scribe.
				</p>
			</div>
		</div>
	{:else if error}
		<div class="flex-1 flex items-center justify-center">
			<div class="text-center text-red-400 max-w-sm space-y-3">
				<div class="text-3xl">{'\u26A0\uFE0F'}</div>
				<p class="text-sm">{error}</p>
				<button
					onclick={resolveDocument}
					class="px-4 py-2 rounded text-xs bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
				>
					Retry
				</button>
			</div>
		</div>
	{:else if documentId}
		<div class="flex-1 flex flex-col min-w-0">
			{#key documentId}
				<ScribeEditor {documentId} />
			{/key}
		</div>
	{/if}
</div>
