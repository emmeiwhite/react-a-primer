import React, { Component } from 'react';

export default class ControlledForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            goodPeople : []
        }
    }

    handleSubmit = ()=>{
        console.dir(this._name)
    }
    render(){
        return(
            <div>
                <form onSubmit={event=>event.preventDefault()}>
                    <input 
                      type="text" 
                      ref={(a)=>this._name = a}  /> {/* this._name is an object of <input> available throughout this Component now!*/}
                    <button type="submit" onClick={this.handleSubmit}>Submit Form</button>
                </form>
            </div>
        )
    }
}