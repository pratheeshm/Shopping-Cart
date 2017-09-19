import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/combine-reducers';
import RouterPage from './containers/Router'
const store=createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
   <RouterPage/>
    </Provider>, document.getElementById('root')

);
registerServiceWorker();
