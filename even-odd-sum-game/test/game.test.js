const { generateRandomNumbers, calculateSum, isEven } = require('../src/js/main');

describe('Game Logic Tests', () => {
    test('generateRandomNumbers should return an array of 5 numbers', () => {
        const numbers = generateRandomNumbers();
        expect(numbers.length).toBe(5);
        numbers.forEach(num => {
            expect(typeof num).toBe('number');
        });
    });

    test('calculateSum should return the correct sum of an array of numbers', () => {
        const numbers = [1, 2, 3, 4, 5];
        const sum = calculateSum(numbers);
        expect(sum).toBe(15);
    });

    test('isEven should return true for even sums and false for odd sums', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven(0)).toBe(true);
        expect(isEven(-1)).toBe(false);
    });
});