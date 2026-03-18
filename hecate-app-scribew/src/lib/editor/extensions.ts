import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import Typography from '@tiptap/extension-typography';
import Collaboration from '@tiptap/extension-collaboration';
import type { Doc as YDoc } from 'yjs';

export function createExtensions(ydoc: YDoc) {
	return [
		StarterKit.configure({
			heading: { levels: [1, 2, 3] },
			// Disable built-in history — Y.js handles undo/redo
			history: false
		}),
		Collaboration.configure({
			document: ydoc
		}),
		Underline,
		TextAlign.configure({
			types: ['heading', 'paragraph']
		}),
		Placeholder.configure({
			placeholder: 'Start writing...'
		}),
		CharacterCount,
		Typography
	];
}
