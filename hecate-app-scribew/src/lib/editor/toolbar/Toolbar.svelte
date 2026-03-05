<svelte:options customElement={{ tag: "scribe-toolbar", shadow: "none" }} />

<script lang="ts">
	import type { Editor } from '@tiptap/core';

	let { editor }: { editor: Editor | null } = $props();

	function btn(action: () => boolean | void, active: string) {
		return {
			onclick: () => { if (editor) action(); },
			class: editor?.isActive(active) ? 'active' : ''
		};
	}
</script>

{#if editor}
<div class="toolbar flex flex-wrap gap-1 p-2 border-b border-zinc-700 bg-zinc-900">
	<button {...btn(() => editor!.chain().focus().toggleBold().run(), 'bold')} title="Bold">
		<strong>B</strong>
	</button>
	<button {...btn(() => editor!.chain().focus().toggleItalic().run(), 'italic')} title="Italic">
		<em>I</em>
	</button>
	<button {...btn(() => editor!.chain().focus().toggleUnderline().run(), 'underline')} title="Underline">
		<u>U</u>
	</button>
	<button {...btn(() => editor!.chain().focus().toggleStrike().run(), 'strike')} title="Strikethrough">
		<s>S</s>
	</button>

	<span class="w-px h-6 bg-zinc-700 mx-1"></span>

	<button onclick={() => editor!.chain().focus().toggleHeading({ level: 1 }).run()}
		class:active={editor.isActive('heading', { level: 1 })} title="Heading 1">
		H1
	</button>
	<button onclick={() => editor!.chain().focus().toggleHeading({ level: 2 }).run()}
		class:active={editor.isActive('heading', { level: 2 })} title="Heading 2">
		H2
	</button>
	<button onclick={() => editor!.chain().focus().toggleHeading({ level: 3 }).run()}
		class:active={editor.isActive('heading', { level: 3 })} title="Heading 3">
		H3
	</button>

	<span class="w-px h-6 bg-zinc-700 mx-1"></span>

	<button {...btn(() => editor!.chain().focus().toggleBulletList().run(), 'bulletList')} title="Bullet List">
		&bull;
	</button>
	<button {...btn(() => editor!.chain().focus().toggleOrderedList().run(), 'orderedList')} title="Ordered List">
		1.
	</button>
	<button {...btn(() => editor!.chain().focus().toggleBlockquote().run(), 'blockquote')} title="Blockquote">
		&ldquo;
	</button>
	<button {...btn(() => editor!.chain().focus().toggleCodeBlock().run(), 'codeBlock')} title="Code Block">
		&lt;/&gt;
	</button>

	<span class="w-px h-6 bg-zinc-700 mx-1"></span>

	<button onclick={() => editor!.chain().focus().setTextAlign('left').run()} title="Align Left">
		&#8676;
	</button>
	<button onclick={() => editor!.chain().focus().setTextAlign('center').run()} title="Align Center">
		&#8596;
	</button>
	<button onclick={() => editor!.chain().focus().setTextAlign('right').run()} title="Align Right">
		&#8677;
	</button>

	<span class="w-px h-6 bg-zinc-700 mx-1"></span>

	<button onclick={() => editor!.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo">
		&#8617;
	</button>
	<button onclick={() => editor!.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo">
		&#8618;
	</button>
</div>
{/if}

<style>
	button {
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		color: #d4d4d8;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
		min-width: 2rem;
		text-align: center;
	}
	button:hover {
		background: #3f3f46;
		border-color: #52525b;
	}
	button.active, button:global(.active) {
		background: #4f46e5;
		color: white;
		border-color: #6366f1;
	}
	button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
</style>
