export default function truncateString(
	text: string,
	maxLength: number,
	ending: string = '...',
): string {
	if (text.length > maxLength) {
		return text.substring(0, maxLength - ending.length) + ending
	}
	return text
}
