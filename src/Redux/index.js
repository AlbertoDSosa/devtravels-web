// createStore

import {createStore, combineReducers} from 'react-redux';


export default () => {
    return createStore (
        combineReducers({

        }),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );
}
