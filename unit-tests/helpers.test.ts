import { validationService } from '../services/validationService';

test('Check if 3 is in range between 1 and 5', () => {
	expect(validationService.isNumberInRange(3, 1, 5)).equal(true);
});

test('Check if 7 is not in range between 1 and 5', () => {
	expect(validationService.isNumberInRange(7, 1, 5)).equal(false);
});
