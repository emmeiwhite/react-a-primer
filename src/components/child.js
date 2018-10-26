import React, { Component } from 'react';
import ModalPopUp from './modal-example';

export default class Child extends Component{
    render(){
        return(
            <div>
                 <h1>THE CHILD COMPONENT</h1>
                 {/* 26-10-2018 */}
                 <ModalPopUp/>
            </div>
           
        )
    }
}