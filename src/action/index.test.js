import moxios from 'moxios';

import { correctGuess, actionTypes } from './index';
import { storeFactory } from '../../test/testUtil';
import { getSecretWord } from "./"


describe('correctGuess', () => {
    test.skip('should retun an action with CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({
            type: actionTypes.CORRECT_GUESS
        })
    })

})



describe('get secret word action creator', () => {
    beforeEach(() => {
        moxios.install();
    })
    afterEach(() => {
        moxios.uninstall()
    })
    test('should add response word to state', () => {
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord
            })
        })

        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord)

            })
    })

})
