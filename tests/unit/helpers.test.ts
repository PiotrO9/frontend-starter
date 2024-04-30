import { expect } from 'vitest'
import capitalizeFirstLetter from '../../assets/helpers/string-manipulation/capitalizeFirstLetter'

describe('helpers function tests', () => {
	test('Capitalize first letter test', () => {
		const word = 'test'
		const result = capitalizeFirstLetter(word)

		expect(result).toBe('Test')
	})
})
