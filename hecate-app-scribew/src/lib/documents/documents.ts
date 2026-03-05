import { getApi } from '../shared/api.js';
import type { Document, DocumentContent } from './types.js';

export async function listDocuments(): Promise<Document[]> {
	const resp = await getApi().get<{ documents: Document[] }>('/api/documents');
	return resp.documents ?? [];
}

export async function getDocument(id: string): Promise<Document> {
	return getApi().get<Document & { ok: boolean }>(`/api/documents/${id}`);
}

export async function createDocument(title: string): Promise<string> {
	const resp = await getApi().post<{ document_id: string }>('/api/documents', {
		title,
		owner: 'local'
	});
	return resp.document_id;
}

export async function renameDocument(id: string, title: string): Promise<void> {
	await getApi().put(`/api/documents/${id}`, { title });
}

export async function archiveDocument(id: string): Promise<void> {
	await getApi().del(`/api/documents/${id}`);
}

export async function getDocumentContent(id: string): Promise<DocumentContent> {
	return getApi().get<DocumentContent & { ok: boolean }>(`/api/documents/${id}/content`);
}

export async function saveDocumentContent(id: string, content: string): Promise<void> {
	await getApi().put(`/api/documents/${id}/content`, { content });
}
