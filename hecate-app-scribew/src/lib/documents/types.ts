export interface Document {
	document_id: string;
	title: string;
	owner: string;
	status: number;
	content_size: number;
	created_at: string;
	updated_at: string;
}

export interface DocumentContent {
	document_id: string;
	content: string;
	content_hash: string;
	revised_at: string;
}
