import { format, parseISO } from 'date-fns'

class FormattingService {
	formatDate(date: Date | string, formatStr: string = 'yyyy-MM-dd'): string {
		const dateObj = typeof date === 'string' ? parseISO(date) : date
		return format(dateObj, formatStr)
	}

	formatTime(date: Date | string, formatStr: string = 'HH:mm:ss'): string {
		const dateObj = typeof date === 'string' ? parseISO(date) : date
		return format(dateObj, formatStr)
	}

	formatCurrency(
		amount: number,
		locale: string = 'en-US',
		currency: string = 'USD',
	): string {
		return new Intl.NumberFormat(locale, {
			style: 'currency',
			currency,
		}).format(amount)
	}

	formatNumber(
		value: number,
		decimalPlaces: number = 2,
		locale: string = 'en-US',
	): string {
		return new Intl.NumberFormat(locale, {
			minimumFractionDigits: decimalPlaces,
			maximumFractionDigits: decimalPlaces,
		}).format(value)
	}

	formatPercentage(
		value: number,
		decimalPlaces: number = 2,
		locale: string = 'en-US',
	): string {
		return new Intl.NumberFormat(locale, {
			style: 'percent',
			minimumFractionDigits: decimalPlaces,
			maximumFractionDigits: decimalPlaces,
		}).format(value)
	}

	capitalizeFirstLetter(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
	}

	truncate(str: string, maxLength: number, suffix: string = '...'): string {
		return str.length > maxLength ? str.slice(0, maxLength) + suffix : str
	}

	formatBoolean(
		value: boolean,
		trueString: string = 'Yes',
		falseString: string = 'No',
	): string {
		return value ? trueString : falseString
	}
}

export const formattingService = new FormattingService()
