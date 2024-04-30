export default function phoneNumberValidation(phoneNumber: string): boolean {
	// Validation for polish phone numbers
	// Acceptable formats
	// 123456789
	// +40 123456789
	const pattern = /^(\+48\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{3})$/
	return pattern.test(phoneNumber)
}
