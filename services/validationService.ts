import { CountryCode } from '~/types/enums/postal-code-patterns'

export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

export function validatePhoneNumber(
	phoneNumber: string,
	countryCode: CountryCode,
): boolean {
	switch (countryCode) {
		case CountryCode.US:
			const usCanadaRegex =
				/^(?:\+1)?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
			return usCanadaRegex.test(phoneNumber)

		case CountryCode.Numeric:
			const numericRegex = /^\d+$/
			return numericRegex.test(phoneNumber)

		case CountryCode.Poland:
			const polandRegex =
				/^(?:\+48)?[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{3}$/
			return polandRegex.test(phoneNumber)

		default:
			return false
	}
}

export function isValidPassword(password: string): boolean {
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
	return passwordRegex.test(password)
}

export function isValidURL(url: string): boolean {
	try {
		new URL(url)
		return true
	} catch (_) {
		return false
	}
}

export function isValidDate(dateString: string): boolean {
	const date = new Date(dateString)
	return !isNaN(date.getTime())
}

export function isNumberInRange(
	value: number,
	min: number,
	max: number,
): boolean {
	return value >= min && value <= max
}

export function isValidFileType(
	fileName: string,
	allowedTypes: string[],
): boolean {
	const extension = fileName.split('.').pop()?.toLowerCase()
	return extension ? allowedTypes.includes(extension) : false
}

export function customValidator(
	value: any,
	validationFunction: (value: any) => boolean,
): boolean {
	return validationFunction(value)
}
