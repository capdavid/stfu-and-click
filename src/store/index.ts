import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { watchGame } from './sagas/gameSagas';
import rootReducer from './reducers/root-reducer';
// import { composeEnhancers } from './utils';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const initialState = {};
const store = createStore(rootReducer, initialState, enhancer);

export default store;
sagaMiddleware.run(watchGame);
