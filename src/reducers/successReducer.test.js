import { actionTypes } from '../action';
import successReducer from './successReducer';

test('should return false on default state', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false)
})

test('should return true after receiving CORRECT_GUESS', () => {
    const newState = successReducer(undefined, {
        type: actionTypes.CORRECT_GUESS
    })
    expect(newState).toBe(true)
})

