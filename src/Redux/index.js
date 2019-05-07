// createStore

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {loadState} from './storageState';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './Reducers/auth';

const initialData = loadState()
const store = createStore (
    combineReducers({
        auth: authReducer
    }),
    initialData,
    composeWithDevTools(
        applyMiddleware(
            logger
        )
    )
);
export default store;