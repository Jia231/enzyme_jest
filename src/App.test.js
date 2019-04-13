import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory, findByTestAttr } from '../test/testUtil';
import App, { UnconnectedApp } from './App';


const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<App store={store} />).dive()
    return wrapper;
}

describe('with all the props', () => {
    test('should render correctly', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, "component-app")
        expect(component.length).toBe(1)
    })
    test('should render success and guessedWrods props', () => {
        const props = {
            success: false,
            guessedWords: [{
                guessedWord: 'train',
                letterMatchCount: 3
            }]
        }
        const wrapper = setup(props);
        const AppSuccessProps = wrapper.instance().props.success;
        const AppGuessedWordsProps = wrapper.instance().props.guessedWords;


        expect(AppSuccessProps).toBe(props.success)
        expect(AppGuessedWordsProps).toEqual([{
            guessedWord: 'train',
            letterMatchCount: 3
        }])
    })

    test('getSecretWord runs on App mount', () => {
        const getSecretWordMock = jest.fn()

        const props = {
            getSecretWord: getSecretWordMock,
            success: false,
            guessedWords: []
        }

        //create App wrapper with get secret word mock as prop
        const wrapper = shallow(<UnconnectedApp {...props} />)

        //run life cycle method
        wrapper.instance().componentDidMount();

        const getSecretWordCount = getSecretWordMock.mock.calls.length;
        expect(getSecretWordCount).toBe(1)
    })


})
