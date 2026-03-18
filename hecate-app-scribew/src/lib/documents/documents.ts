import { getApi } from '../shared/api.js';
import type { Document, DocumentContent } from './types.js';

export async function listDocuments(): Promise<Document[]> {
	const resp = await getApi().get<{ documents: Document[] }>('/documents');
	return resp.documents ?? [];
}

export async function getDocument(id: string): Promise<Document> {
	return getApi().get<Document & { ok: boolean }>(`/documents/${id}`);
}

export async function createDocument(title: string, fileId?: string): Promise<string> {
	const body: Record<string, string> = { title, owner: 'local' };
	if (fileId) body.file_id = fileId;
	const resp = await getApi().post<{ document_id: string }>('/documents', body);
	return resp.document_id;
}

export async function renameDocument(id: string, title: string): Promise<void> {
	await getApi().put(`/documents/${id}`, { title });
}

export async function archiveDocument(id: string): Promise<void> {
	await getApi().del(`/documents/${id}`);
}

export async function getDocumentContent(id: string): Promise<DocumentContent> {
	return getApi().get<DocumentContent & { ok: boolean }>(`/documents/${id}/content`);
}

export async function saveDocumentContent(id: string, content: string): Promise<void> {
	await getApi().put(`/documents/${id}/content`, { content });
}
