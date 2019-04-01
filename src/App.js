import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      counter:0,
      showError : 'none'
    }

    this.decrese = this.decrese.bind(this);
  }

  decrese(){
    if(this.state.counter==0){
      this.setState({...this.state,showError:"inline"})
    }
    else{
      this.setState({...this.state,showError:"none",counter:this.state.counter - 1})
    }
  }

  render() {
    const styles = {
      display:this.state.showError,
      color:'red'
    }
    return (
      <div data-test="component-App">
      <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
      <h3 data-test="error-component" style={styles}>The counter can not go  below 0.</h3><br></br>
        <button data-test="increment" onClick={()=>this.setState({counter:this.state.counter+1,showError:'none'})}>Increment</button>
        <button data-test="decrement" onClick={this.decrese}>Decrement</button>
      </div>
    );
  }
}

export default App;
