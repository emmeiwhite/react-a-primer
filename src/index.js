import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import {Router,Route,browserHistory,Link,IndexRoute} from 'react-router'; This is version 3, but we now use version 4

import {BrowserRouter as Router,Route,Link,NavLink, Switch} from 'react-router-dom';

import {Prompt} from 'react-router';

import App from './App';
import Child from './components/child';

import './index.css';

import * as serviceWorker from './serviceWorker';


// Let's create some Components- Functional Components and Learn Nested Routes
const Links = ()=>{
    return(
        <div className="list-group">    
                <NavLink  className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
                <NavLink  className="list-group-item" exact activeClassName="active" to="/child">Child</NavLink>
                <NavLink  className="list-group-item" exact activeClassName="active" to="/about">About</NavLink>
                <NavLink  className="list-group-item" exact activeClassName="active" to="/form">Form</NavLink>               
        </div>
        
    )
 
}

const About = ()=>{
    return (
    <div>
        <h2>About Page</h2>
        {/* <NavLink to="/">Root Component</NavLink> */}
    </div>
    );
}

// 26-10-2018

class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            isChanged:false
        }
    }

    render(){
        return(
           <div>
                   <Prompt 
                        when={this.state.isChanged === true} 
                        message="Are you sure you want to submit the details" />
                   <input type="text" className="form-control" onChange={()=>{
                       this.setState({
                           isChanged:true
                       })
                   }} placeholder="Once you write Prompt will pop up"/>
           </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <div className="row">
            <section className="col-md-3">
                  <Links/>
            </section>

            <section className="col-md-9">
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/child" exact component={Child} />
                    {/* Nested Route in Version 4 */}
                    <Route path="/about" component={About}/>
                    <Route path="/form" component={Form}/>
                    {/* When a user types a mismatched path */}
                    <Route render= {
                        ()=>{
                            return(
                                <h1>404 ERROR ! Wrong path ! path Mismatch</h1>
                            )
                        }
                    } />
                </Switch>
            </section>
        </div>
    </Router>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
