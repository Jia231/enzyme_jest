import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from "../test/testUtil";
import Input from './Input';


const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive()
}

setup()

describe('render', () => {
    describe('word has not been guessed', () => {
        test('should render component without error', () => {

        })
        test('should render input box', () => {

        })
        test('should submit button', () => {

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

