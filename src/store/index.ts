import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/root-reducer';
// import { composeEnhancers } from './utils';

// const middlewares: any = [];

// const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
