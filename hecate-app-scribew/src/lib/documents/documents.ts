import { getApi } from '../shared/api.js';

export interface ContentResponse {
	item_id: string;
	content: string;
	content_hash: string;
}

export async function getContent(itemId: string): Promise<ContentResponse> {
	return getApi().get<ContentResponse>(`/content/${itemId}`);
}

export async function saveContent(itemId: string, content: string): Promise<void> {
	await getApi().put(`/content/${itemId}`, { content });
}
