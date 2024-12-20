export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export async function useApi<T>(method: HttpMethod, url: string, data?: any) {
	const { $api } = useNuxtApp();

	return await $api[method]<T>(url, data);
}
