import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory,Link,IndexRoute} from 'react-router';

import App from './App';
import Child from './components/child';

import './index.css';

import * as serviceWorker from './serviceWorker';


// Let's create some Components- Functional Components and Learn Nested Routes
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/child" component={Child} />
        {/* Nested Route*/}
        <Route>

        </Route>
    </Router>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
