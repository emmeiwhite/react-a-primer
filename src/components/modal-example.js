import React,{Component} from 'react';
import Modal from 'react-modal';

class ModalPopUp extends Component{
    constructor(props){
        super(props);

        this.state = {
            isActive:false
        }
    }

    modalClickHandler = ()=>{
        this.setState({
            isActive:!this.state.isActive
        })
    }

    componentWillMount(){
        Modal.setAppElement('body');
    }

    render(){
        return(
            <div>
                    <button onClick={this.modalClickHandler}>Show Modal</button>
                    <Modal isOpen={this.state.isActive}>
                        Hello This is World's Awesonme Awesonme Awesome Modal !!!
                    </Modal>
            </div>
          
        )
    }
}

export default ModalPopUp;