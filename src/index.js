import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Github from './container/main.container.js';
import configureStore from './store/storeConfig';
import { loadEvents } from './actions/index';
import './index.css';

let currentValue;

function handleChange() {
	let previousValue = currentValue;
	currentValue = store.getState().user;
    console.log(currentValue);
    
    if (previousValue !== currentValue) {
		store.dispatch(loadEvents(store.getState().user));
	}
}

const store = configureStore();
      store.dispatch(loadEvents(store.getState().user));
      store.subscribe(handleChange);

class App extends React.Component{
    render(){
        return(
            <Github></Github>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

