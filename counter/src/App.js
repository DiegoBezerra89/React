//My first code in React ^^ 

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contador: 0
  }
  increment = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  decrement = () => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  clear = () => {
    this.setState({
      contador: this.state.contador = 0
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Contador: {this.state.contador}<hr></hr>
          <button className = "btn" onClick = {this.increment}>+</button><br></br>
          <button className = "btn" onClick = {this.decrement}>-</button><br></br>
          <button className = "btn" onClick = {this.clear}>Clear</button><br></br>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Now
          </a>
        </header>
      </div>
    );
  }
}

export default App;