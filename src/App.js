import React, { Component } from 'react';
import Parent from './components/parent';

class App extends Component {
  constructor(props){
    super(props);
    
    console.log('APP - Root Constructor');

    this.state={
      rootMoney:600 
    }
  }
 
  componentWillMount(){
   console.log('App - Root componentWillMount')
  }

  componentDidMount(){
    console.log('App - Root componentDidMount')
  }

  // .1 updating the state of App Component
  onChangeNumberHandler = ()=>{
    this.setState({
      rootMoney:this.state.rootMoney + 100,
    })
  }

  render() {
    console.log('App - render Method')
    return (
      <div className="App">
         <button onClick={this.onChangeNumberHandler}>App - RootHandler</button>
        
        <Parent 
          money={this.state.rootMoney}/>
         
      </div>
    );
  }
}

export default App;
