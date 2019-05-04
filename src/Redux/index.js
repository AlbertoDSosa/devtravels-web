// createStore

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {loadState} from './storageState';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './Reducers/auth';

const initialData = loadState()

export default () => {
    return createStore (
        combineReducers({
            auth: authReducer
        }),
        initialData,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                logger
            )
        )
    );
}
