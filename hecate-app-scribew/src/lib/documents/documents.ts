import JSZip from 'jszip';
import { getApi } from '../shared/api.js';

let contentDir: string | null = null;

/** Get the content directory from the daemon (cached). */
async function getContentDir(): Promise<string> {
	if (contentDir) return contentDir;
	const info = await getApi().get<{ content_dir: string }>('/info');
	contentDir = info.content_dir;
	return contentDir;
}

/** Construct the full path for a .scribe file. */
async function scribePath(itemId: string): Promise<string> {
	const dir = await getContentDir();
	return `${dir}/${itemId}.scribe`;
}

/** Read a .scribe archive from disk via Tauri fs. */
export async function readArchive(itemId: string): Promise<JSZip> {
	const path = await scribePath(itemId);
	const fsMod: any = await dynamicImport('@tauri-apps/plugin-fs');
	try {
		const bytes: Uint8Array = await fsMod.readFile(path);
		return await JSZip.loadAsync(bytes);
	} catch {
		// File doesn't exist — return empty archive
		return new JSZip();
	}
}

/** Write a .scribe archive to disk via Tauri fs. */
export async function writeArchive(itemId: string, zip: JSZip): Promise<void> {
	const path = await scribePath(itemId);
	const fsMod: any = await dynamicImport('@tauri-apps/plugin-fs');

	// Update manifest timestamp
	const now = Date.now();
	let manifest: Record<string, unknown> = { format: 'scribe', version: 1, created_at: now };
	try {
		const existing = await zip.file('manifest.json')?.async('string');
		if (existing) manifest = { ...JSON.parse(existing), last_modified_at: now };
		else manifest.last_modified_at = now;
	} catch {
		manifest.last_modified_at = now;
	}
	zip.file('manifest.json', JSON.stringify(manifest));

	const bytes = await zip.generateAsync({ type: 'uint8array' });

	// Ensure parent directory exists
	const dir = path.substring(0, path.lastIndexOf('/'));
	try { await fsMod.mkdir(dir, { recursive: true }); } catch { /* exists */ }

	await fsMod.writeFile(path, bytes);
}

/** Read content.yjs from the .scribe archive. */
export async function getContent(itemId: string): Promise<Uint8Array | null> {
	const zip = await readArchive(itemId);
	const file = zip.file('content.yjs');
	if (!file) return null;
	return await file.async('uint8array');
}

/** Write content.yjs to the .scribe archive. */
export async function saveContent(itemId: string, content: Uint8Array): Promise<void> {
	const zip = await readArchive(itemId);
	zip.file('content.yjs', content);
	await writeArchive(itemId, zip);
}

/** List snapshot names. */
export async function listSnapshots(itemId: string): Promise<string[]> {
	const zip = await readArchive(itemId);
	const names: string[] = [];
	zip.folder('snapshots')?.forEach((relativePath) => {
		if (relativePath.endsWith('.yjs')) {
			names.push(relativePath.replace('.yjs', ''));
		}
	});
	return names;
}

/** Create a named snapshot (copy of current content.yjs). */
export async function createSnapshot(itemId: string, name: string): Promise<void> {
	const zip = await readArchive(itemId);
	const content = zip.file('content.yjs');
	if (!content) return;
	const bytes = await content.async('uint8array');
	zip.file(`snapshots/${name}.yjs`, bytes);
	await writeArchive(itemId, zip);
}

/** Read a named snapshot. */
export async function readSnapshot(itemId: string, name: string): Promise<Uint8Array | null> {
	const zip = await readArchive(itemId);
	const file = zip.file(`snapshots/${name}.yjs`);
	if (!file) return null;
	return await file.async('uint8array');
}

/** Dynamic import helper — bypasses TypeScript module resolution. */
async function dynamicImport(pkg: string): Promise<any> {
	return import(/* @vite-ignore */ pkg);
}
