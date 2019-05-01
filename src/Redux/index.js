// createStore

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './Reducers/auth';

export default () => {
    return createStore (
        combineReducers({
            auth: authReducer
        }),
        composeWithDevTools(
            applyMiddleware(
              logger,
              thunk
            )
        )
    );
}
