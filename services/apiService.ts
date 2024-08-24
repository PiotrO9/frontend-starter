// services/apiService.ts
import { HttpMethod } from '~/types/enums/httpMethodsTypes'

class ApiService {
	private api

	constructor(baseURL: string = '') {
		this.api = $fetch.create({
			baseURL: baseURL,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	async request<T>(
		method: HttpMethod,
		url: string,
		data?: any,
		options: any = {},
		lazy: boolean = false,
	): Promise<T> {
		try {
			const response = await this.api<T>(url, {
				method,
				body: data,
				lazy,
				...options,
			})
			return response
		} catch (error) {
			this.handleError(error)
			throw error
		}
	}

	async get<T>(
		url: string,
		options: any = {},
		lazy: boolean = false,
	): Promise<T> {
		return this.request<T>(HttpMethod.GET, url, undefined, options, lazy)
	}

	async post<T>(
		url: string,
		data: any,
		options: any = {},
		lazy: boolean = false,
	): Promise<T> {
		return this.request<T>(HttpMethod.POST, url, data, options, lazy)
	}

	async put<T>(
		url: string,
		data: any,
		options: any = {},
		lazy: boolean = false,
	): Promise<T> {
		return this.request<T>(HttpMethod.PUT, url, data, options, lazy)
	}

	async delete<T>(
		url: string,
		options: any = {},
		lazy: boolean = false,
	): Promise<T> {
		return this.request<T>(HttpMethod.DELETE, url, undefined, options, lazy)
	}

	private handleError(error: any): void {
		console.error('API Error:', error)
	}
}

export const apiService = new ApiService('https://api.example.com')
