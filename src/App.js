import React, { Component } from 'react';
import Parent from './components/parent';

class App extends Component {
  constructor(props){
    super(props);
    
    console.log('APP - Root Constructor');

    this.state={
      rootMoney:600,
      count:0
    }
  }
 
  componentWillMount(){
   console.log('App - Root componentWillMount')
  }

  componentDidMount(){
    console.log('App - Root componentDidMount')
  }

  shouldComponentUpdate(){
    // console.log('Should Component Update Invoked !!!');
    // Once we declare shouldComponentUpdate, we must either return true or false,
    // if we don't return either true or false, should ComponentUpdate returns undefined
    // and even in that case, the component is not rendered
    console.log('Within shouldComponentUpdate, returning true and allowing component rendering !!!');
    if(this.state.count>10){
      return false
    }
    return true;
  }

  // .1 updating the state of App Component
  onChangeNumberHandler = ()=>{
    this.setState({
      rootMoney:this.state.rootMoney + 100,
    })
  }

  playAround = ()=>{
    console.log('Play Around Method invoked !!!')
  }

  incrementHandleCount = ()=>{
    this.setState({
      ...this.state,
      count:this.state.count + 1
    })
  }


  render() {
    console.log('App - render Method')
    return (
      <div className="App">
         <button onClick={this.onChangeNumberHandler}>App - RootHandler</button>
         
         <h2>Checking shouldComponentUpdate</h2>
       
         <button onClick={this.incrementHandleCount}>Increment</button>
         <span>{this.state.count}</span>
        
        <Parent 
          money={this.state.rootMoney}
          playAround={this.playAround}
          />
         
      </div>
    );
  }
}

export default App;
