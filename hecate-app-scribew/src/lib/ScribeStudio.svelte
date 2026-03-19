<svelte:options customElement={{ tag: "scribe-studio", shadow: "none" }} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { setApi, type PluginApi } from './shared/api.js';
	import ScribeEditor from './editor/ScribeEditor.svelte';

	let { api, itemId }: { api: PluginApi; itemId?: string } = $props();

	onMount(() => {
		setApi(api);
	});
</script>

<div class="flex h-full bg-zinc-950 text-zinc-200">
	{#if itemId}
		<div class="flex-1 flex flex-col min-w-0">
			{#key itemId}
				<ScribeEditor {itemId} />
			{/key}
		</div>
	{:else}
		<div class="flex-1 flex items-center justify-center">
			<div class="text-center text-zinc-400 max-w-sm space-y-3">
				<div class="text-3xl">{'\uD83D\uDCBC'}</div>
				<p class="text-sm">Open a document from <a href="/briefcase" class="text-indigo-400 hover:text-indigo-300 underline">Briefcase</a> to start editing.</p>
			</div>
		</div>
	{/if}
</div>
