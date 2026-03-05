import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import Typography from '@tiptap/extension-typography';

export function createExtensions() {
	return [
		StarterKit.configure({
			heading: { levels: [1, 2, 3] }
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
