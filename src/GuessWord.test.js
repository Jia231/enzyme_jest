import React from 'react';
import { shallow } from 'enzyme';

import GuessWord from './GuessWord';
import { findByTestAttr, checkProps } from '../test/testUtil';
import { exportAllDeclaration } from '@babel/types';

const defaultProps = {
    guessedWords: [{
        guessedWord: 'train',
        letterMatchCount: 3
    }]
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessWord {...setupProps} />)
}

test('should not throw warning with expected props', () => {
    checkProps(defaultProps, GuessWord)
})

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] })
    })

    test('should render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('should render instructions', () => {
        const instructions = findByTestAttr(wrapper, 'component-instructions');
        expect(instructions.text()).not.toBe(0)
    })



})

describe('if there are words guessed', () => {

})