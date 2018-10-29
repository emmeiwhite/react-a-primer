import React, { Component } from 'react';

export default class ControlledForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            name : ''
        }
    }

    handleSubmit = ()=>{
        console.dir(this.state.name)
    }

    nameChangehandler = (event)=>{
        this.setState({
            name:event.target.value
        })

        console.log(this.state.name)
    }

    render(){
        return(
            <div>
                <form onSubmit={event=>event.preventDefault()}>
                    <input 
                      type="text" 
                      value={this.state.name} 
                      onChange = {this.nameChangehandler}/> {/* ref={(a)=>this._name = a}  this._name is an object of <input> available throughout this Component now!*/}
                    <button 
                        type="submit" 
                        disabled={this.state.name.length ? false : true}
                        onClick={this.handleSubmit}>Submit Form</button>
                </form>
            </div>
        )
    }
}