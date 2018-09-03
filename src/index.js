import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Github from './container/main.container.js';
import configureStore from './store/storeConfig';
import './index.css';

const store = configureStore();

class App extends React.Component{
    render(){
        return(
            <Github></Github>
        )
    }
}

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));

