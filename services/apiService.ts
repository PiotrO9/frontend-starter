import { HttpMethod } from '~/types/enums/httpMethodsTypes'

interface ApiResponse<T> {
	success: boolean
	message: string
	data: T
	statusCode: number
}

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
			const response: ApiResponse<T> = await this.api(url, {
				method,
				body: data,
				lazy,
				...options,
			})

			// Handle the API response according to your backend's standardized structure
			if (response.success) {
				return response.data
			} else {
				// If the response indicates an error, throw an exception with the message
				throw new Error(
					response.message || 'An unknown error occurred.',
				)
			}
		} catch (error: any) {
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
		// Check for API response structure and handle accordingly
		if (error?.data?.message) {
			console.error('API Error Message:', error.data.message)
		} else {
			console.error('API Error:', error)
		}
	}
}

export const apiService = new ApiService('https://api.example.com')
