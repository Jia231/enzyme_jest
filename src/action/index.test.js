import { correctGuess, actionTypes } from './index';

describe('correctGuess', () => {
    test.skip('should retun an action with CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({
            type: actionTypes.CORRECT_GUESS
        })
    })

})