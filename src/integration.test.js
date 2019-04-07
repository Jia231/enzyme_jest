import { storeFactory } from '../test/testUtil';
import { guessWord } from './action';

describe('guessWrod action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessful = 'train';
    let store;
    const initialState = { secretWord }
    beforeEach(() => {
        store = storeFactory(initialState);
    })
    describe('no guessed words', () => {
        test('should update state correctly with unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessful));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessful,
                    letterMatchCount: 3
                }]
            }

            expect(newState).toEqual(expectedState)
        })
        test('should update state correctly with successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState)
        })
    })
    describe('some guessed words', () => {
        const guessedWords = [{
            guessedWord: 'agile',
            letterMatchCount: 1
        }]
        const initialState = { guessedWords, secretWord }
        let store;
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('should update state correctly with unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessful))
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: unsuccessful, letterMatchCount: 3 }
                ]

            }
            expect(newState).toEqual(expectedState)
        })
        test('should update state correctly with successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                success: true,
                secretWord,
                guessedWords: [
                    ...guessedWords, {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
    })

})
