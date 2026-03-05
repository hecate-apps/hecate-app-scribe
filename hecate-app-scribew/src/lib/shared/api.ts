interface PluginApi {
	get: <T>(path: string) => Promise<T>;
	post: <T>(path: string, body: unknown) => Promise<T>;
	put: <T>(path: string, body: unknown) => Promise<T>;
	del: <T>(path: string) => Promise<T>;
}

let pluginApi: PluginApi | null = null;

export function setApi(api: PluginApi) {
	pluginApi = api;
}

export function getApi(): PluginApi {
	if (!pluginApi) throw new Error('Plugin API not initialized');
	return pluginApi;
}

export type { PluginApi };
