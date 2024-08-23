export default function validatePolishNIP(nip: string): boolean {
    const cleanNIP = nip.replace(/\D/g, '');

    if (cleanNIP.length !== 10) {
        return false;
    }

    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];

    let checksum = 0;

    for (let i = 0; i < weights.length; i++) {
        checksum += parseInt(cleanNIP[i], 10) * weights[i];
    }

    const checkDigit = parseInt(cleanNIP[9], 10);

    return checksum % 11 === checkDigit;
}
