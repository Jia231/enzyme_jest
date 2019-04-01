import React from 'react';
import Enzyme, {shallow} from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";


import App from './App';
import { exportAllDeclaration } from '@babel/types';
import { wrap } from 'module';

Enzyme.configure({adapter:new EnzymeAdapter()})


const setup = ()=>{
  const wrapper = shallow(<App/>)
  return wrapper;
}

const findByDataTest = (wrapper,val)=>{
  return wrapper.find(`[data-test="${val}"]`)
}


test('it should render without any errors',()=>{
  const wrapper = setup();
  const appComponent = findByDataTest(wrapper,"component-App")

  expect(appComponent.length).toBe(1)
})

test('it should render a increment button',()=>{
  const wrapper = setup();
  const buttonComponent = findByDataTest(wrapper,"increment")
  expect(buttonComponent.length).toBe(1)
})

test('it should render a decrement button',()=>{
  const wrapper = setup();
  const buttonComponent = findByDataTest(wrapper,"decrement")
  expect(buttonComponent.length).toBe(1)
})

test('counter display should be displayed',()=>{
  const wrapper = setup();
  const counterDisplay =findByDataTest(wrapper,"counter-display")

  expect(counterDisplay.length).toBe(1)
})

test('state should start at 0',()=>{
 const wrapper = setup();
 const initialState = wrapper.state('counter')

 expect(initialState).toBe(0)
})

test('after button clicking state should increment by 1',()=>{
  const wrapper = setup();
  const wrapperWithState = wrapper.setState({counter:7})
  const buttonComponent = findByDataTest(wrapper,"increment")
  buttonComponent.simulate('click')
  wrapper.update();
  const counterDisplay = findByDataTest(wrapper,"counter-display")
  expect(counterDisplay.text()).toContain(8)
})

test('it should not show error at the start',()=>{
  const wrapper = setup();
  const initialState = wrapper.state('showError')
  expect(initialState).toBe('none')
})

test('it should show error when counter is 0',()=>{
  const wrapper = setup();
  const buttonComponent = findByDataTest(wrapper,"decrement")
  wrapper.setState({counter:0})
  buttonComponent.simulate('click')
  wrapper.update()
  const errorComponent = findByDataTest(wrapper,"error-component");
  expect(errorComponent.length).toBe(1)
})
