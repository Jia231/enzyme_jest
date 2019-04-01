import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { FindByTestAttr, findByTestAtr } from '../test/testUtil';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />)
}

test('should render without error', () => {
    const wrapper = setup();
    const congratsComp = findByTestAtr(wrapper, "congrats-component")

    expect(congratsComp.length).toBe(1)
})

test('should not render success when prop is false', () => {
    const wrapper = setup({ success: false });
    const congratsComp = findByTestAtr(wrapper, "congrats-component")

    expect(congratsComp.text()).toBe('')
})

test('should render success when prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAtr(wrapper, "congrats-component")

    expect(message.text()).not.toBe(0)
})