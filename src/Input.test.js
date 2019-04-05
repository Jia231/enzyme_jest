import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from "../test/testUtil";
import Input from './Input';
import { exportAllDeclaration } from '@babel/types';


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
        test('should not render input box', () => {

        })

        test('should not render submit button', () => {

        })


    })

})

describe('update state', () => {

})

