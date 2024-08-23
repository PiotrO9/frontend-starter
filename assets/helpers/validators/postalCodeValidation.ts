import { CountryCode } from '~/types/enums/postal-code-patterns';

export default function postalCodeValidation(
    postalCode: string,
    countryCode: CountryCode
): boolean {
    const patterns: Record<CountryCode, RegExp> = {
        [CountryCode.US]: /^\d{5}(-\d{4})?$/, // e.g., 12345 or 12345-6789
        [CountryCode.Canada]: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, // e.g., K1A 0B1 or K1A-0B1
        [CountryCode.Numeric]: /^\d+$/, // e.g., 123456
        [CountryCode.Poland]: /^\d{2}-\d{3}$/ // e.g., 00-123
    };

    return patterns[countryCode].test(postalCode);
}
