import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import store from './store/data'
import App from './view/App'

import './assets/css/style.css'

import Dati from './view/Dati'
import Result from './view/Result'
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={App}></Route>
            <Route path="/dati" component={Dati}></Route>
            <Route path="/result" component={Result}></Route>
        </Router>
    </Provider>,
    document.querySelector("#root")
)

