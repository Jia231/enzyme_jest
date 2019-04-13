import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from "../test/testUtil";
import Input, { UnconnectedInput } from './Input';



const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive()
    return wrapper;
}

setup()

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false }
            wrapper = setup(initialState)
        })
        test('should render component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1)
        })
        test('should render input box', () => {
            const component = findByTestAttr(wrapper, "input-box");
            expect(component.length).toBe(1)
        })
        test('should submit button', () => {
            const component = findByTestAttr(wrapper, "submit-button");
            expect(component.length).toBe(1)
        })

    })
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true }
            wrapper = setup(initialState)
        })

        test('should render component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1)
        })
        test('should not render input box', () => {
            const component = findByTestAttr(wrapper, "input-box");
            expect(component.length).toBe(0)
        })

        test('should not render submit button', () => {
            const component = findByTestAttr(wrapper, "submit-button");
            expect(component.length).toBe(0)
        })



    })

})

describe('redux props', () => {
    test('should have success piece of state as props', () => {
        const success = true;
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })
    test('should have guessWord action creator as function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function)
    })


})


describe('guess word action creator call', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train'
    beforeEach(() => {
        guessWordMock = jest.fn();

        const props = {
            success: false,
            guessWord: guessWordMock
        }

        wrapper = shallow(<UnconnectedInput {...props} />)
        wrapper.instance().inputBox.current = { value: guessedWord }
        const button = findByTestAttr(wrapper, "submit-button");
        button.simulate('click', { preventDefault() { } })
    })
    test('should call guessword when button is clicked', () => {


        const guessWordMockCount = guessWordMock.mock.calls.length;
        expect(guessWordMockCount).toBe(1)
    })

    test('should call guess word with expected attribute', () => {
        const expectedGuessWord = guessWordMock.mock.calls[0][0]
        expect(expectedGuessWord).toBe(guessedWord)

    })


})


