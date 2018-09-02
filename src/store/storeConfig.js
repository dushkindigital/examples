import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';

function storeConfig(initState) {
    
    return createStore(reducers, initState, applyMiddleware(thunk));

}

export default storeConfig;
