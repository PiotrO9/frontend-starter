export default function phoneNumberValidation(phoneNumber: string): boolean {
	const pattern = /^(\+48\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{3})$/
	return pattern.test(phoneNumber)
}
