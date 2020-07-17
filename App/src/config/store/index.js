import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

/**
 * Create a store with thunk middleware. And add reducers to it.
 */
const reducer = combineReducers(reducers);
const store = createStore(reducer, {}, compose(applyMiddleware(thunk)) );

export default store;
