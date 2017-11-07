import React, { Component } from 'react';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Circular Loading</h1>
        </header>
        <Content></Content>
      </div>
    );
  }
}

export default App;
