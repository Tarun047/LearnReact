import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  	var message = "Welcome to the Road to learn React is really awesome, verified by TG";
  	const dict = {text:'Sample Text Declarations'};
  	dict.text = 'Run Time Modifications on Const Object Holders is allowed in es6';
    return (
      <div className="App">
      	<h2>{dict.text}</h2>
        <h2>{message}</h2>
      </div>
    );
  }
}

export default App;
