import type { ValidationCriteria } from '~/types/enums/password-validation-criteria'

export function passwordValidation(
	password: string,
	criteria: ValidationCriteria,
): string[] {
	const errors: string[] = []

	if (
		criteria.minLength !== undefined &&
		password.length < criteria.minLength
	) {
		errors.push(
			`Password must be at least ${criteria.minLength} characters long.`,
		)
	}

	if (
		criteria.maxLength !== undefined &&
		password.length > criteria.maxLength
	) {
		errors.push(
			`Password must not exceed ${criteria.maxLength} characters.`,
		)
	}

	if (criteria.requireUppercase && !/[A-Z]/.test(password)) {
		errors.push('Password must contain at least one uppercase letter.')
	}

	if (criteria.requireLowercase && !/[a-z]/.test(password)) {
		errors.push('Password must contain at least one lowercase letter.')
	}

	if (criteria.requireNumbers && !/\d/.test(password)) {
		errors.push('Password must contain at least one number.')
	}

	if (
		criteria.requireSpecialChars &&
		!/[!@#$%^&*(),.?":{}|<>]/.test(password)
	) {
		errors.push('Password must contain at least one special character.')
	}

	if (criteria.requiredChars) {
		criteria.requiredChars.forEach((char) => {
			if (!password.includes(char)) {
				errors.push(`Password must include the character: ${char}`)
			}
		})
	}

	return errors
}
