import { getLetterMatchCount } from './index';


describe('get letter match count', () => {
    const secretWord = "party"
    test('should return 0 when no mathching letters', () => {
        const count = getLetterMatchCount('bones', secretWord)
        expect(count).toBe(0);
    })

    test('should return 3 match letters', () => {
        const count = getLetterMatchCount('train', secretWord)
        expect(count).toBe(3);
    })

    test('should return correct count for matching letters', () => {
        const count = getLetterMatchCount('parka', secretWord)
        expect(count).toBe(3);
    })



})
