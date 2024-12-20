import type { ApiClient } from './api-client';

declare module '#app' {
	interface NuxtApp {
		$api: ApiClient;
	}
}

export {};
