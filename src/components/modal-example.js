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
                    <Modal isOpen={this.state.isActive} onRequestClose={this.modalClickHandler}>
                        <h1>Hello This is World's Awesonme Awesonme Awesome Modal !!!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident maiores quos, ad quasi impedit cupiditate incidunt minus, vel vero ea saepe sit dolor mollitia officiis consequatur qui nam doloremque alias tempore veniam ut voluptatum ex quis repudiandae! Officia, ullam optio recusandae ducimus praesentium accusantium tempora. Obcaecati voluptate nemo iusto eius laborum vitae cupiditate voluptatibus distinctio architecto, dignissimos tenetur labore aut! Assumenda accusantium praesentium reprehenderit rem repudiandae, aperiam et ad. Officia, ut nesciunt. Voluptatem fugit beatae nihil ratione doloremque est tempora possimus dolores
                         libero in repellendus tenetur eos, placeat ducimus voluptates repudiandae corporis. Fugiat praesentium tempora, corrupti ut optio rem rerum.</p>

                        <button onClick={this.modalClickHandler}>Hide Modal</button>
                    </Modal>
            </div>
          
        )
    }
}

export default ModalPopUp;