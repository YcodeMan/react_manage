import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routers from '@routers'
import {Provider} from 'react-redux'
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <Routers>
            <App/>
        </Routers>
    </Provider>
    
         , 
    document.getElementById('root'));


