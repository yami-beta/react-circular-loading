import React, { Component } from 'react';
import './App.css';
import ComponentSample from './ComponentSample';
import Installation from './Installation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Circular Loading</h1>
        </header>
        <ComponentSample></ComponentSample>
        <Installation></Installation>
      </div>
    );
  }
}

export default App;
