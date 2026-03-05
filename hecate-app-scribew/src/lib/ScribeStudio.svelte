<svelte:options customElement={{ tag: "scribe-studio", shadow: "none" }} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { setApi, type PluginApi } from './shared/api.js';
	import DocumentList from './documents/DocumentList.svelte';
	import ScribeEditor from './editor/ScribeEditor.svelte';

	let { api }: { api: PluginApi } = $props();

	let selectedDocId = $state<string | null>(null);

	onMount(() => {
		setApi(api);
	});

	function handleSelect(id: string) {
		selectedDocId = id;
	}

	function handleBack() {
		selectedDocId = null;
	}
</script>

<div class="flex h-full bg-zinc-950 text-zinc-200">
	{#if selectedDocId}
		<div class="w-64 border-r border-zinc-800 flex-shrink-0 flex flex-col">
			<button onclick={handleBack} class="px-3 py-2 text-xs text-zinc-400 hover:text-zinc-200 text-left border-b border-zinc-800">
				&#8592; Back to list
			</button>
			<DocumentList onSelect={handleSelect} />
		</div>
		<div class="flex-1 flex flex-col min-w-0">
			{#key selectedDocId}
				<ScribeEditor documentId={selectedDocId} />
			{/key}
		</div>
	{:else}
		<div class="flex-1">
			<DocumentList onSelect={handleSelect} />
		</div>
	{/if}
</div>
