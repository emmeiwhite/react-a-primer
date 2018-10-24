import React, { Component } from 'react';
import Parent from './components/parent';

class App extends Component {
  state={
    rootMoney:600
  }

  onChangeNumberHandler = ()=>{
    console.log('Button Clicked!!!')
   
    this.setState({
      rootMoney:this.state.rootMoney + 100,
    })
  }
  render() {
    return (
      <div className="App">
         <button onClick={this.onChangeNumberHandler}>Change State of App</button>
        
        <Parent 
          money={this.state.rootMoney}/>
         
      </div>
    );
  }
}

export default App;
