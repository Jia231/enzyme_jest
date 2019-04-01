import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';



import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../test/testUtil';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = { success: false }

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrats {...setupProps} />)
}

test('should render without error', () => {
    const wrapper = setup({ success: false });
    const congratsComp = findByTestAttr(wrapper, "congrats-component")

    expect(congratsComp.length).toBe(1)
})

test('should not render success when prop is false', () => {
    const wrapper = setup({ success: false });
    const congratsComp = findByTestAttr(wrapper, "congrats-component")

    expect(congratsComp.text()).toBe('')
})

test('should render success when prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, "congrats-component")

    expect(message.text()).not.toBe(0)
})

test('should not throw warning with expected props', () => {
    checkProps({ success: false }, Congrats)

})
