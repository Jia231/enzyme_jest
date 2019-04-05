import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux'

import rootReducer from '../src/reducers';


export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


export const checkProps = (expectedProps, component) => {
    const errorProps = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name)

    expect(errorProps).toBeUndefined();
}