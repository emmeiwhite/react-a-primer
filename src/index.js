import React from 'react';
import ReactDOM from 'react-dom';
// import {Router,Route,browserHistory,Link,IndexRoute} from 'react-router'; This is version 3, but we now use version 4

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import App from './App';
import Child from './components/child';

import './index.css';

import * as serviceWorker from './serviceWorker';


// Let's create some Components- Functional Components and Learn Nested Routes
const Links = ()=>{
    return(
        <div className="header_links">
            <Link to="/">Home</Link>
            <Link to="/child">Child</Link>
        </div>
        
    )
 
}

const About = ()=>{
    return (
    <div>
        <h2>About Page</h2>
        {/* <Link to="/">Root Component</Link> */}
    </div>
    );
}

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Links/>
            <Route path="/" exact component={App} />
            <Route path="/child" exact component={Child} />
            {/* Nested Route*/}
            <Route path="/about" component={About}>

            </Route>
        </React.Fragment>
    </Router>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
