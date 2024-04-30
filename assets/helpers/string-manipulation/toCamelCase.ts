export default function toCamelCase(text: string): string {
	return text
		.toLowerCase()
		.replace(/[-_]+/g, ' ')
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
			index == 0 ? letter.toLowerCase() : letter.toUpperCase(),
		)
		.replace(/\s+/g, '')
}
