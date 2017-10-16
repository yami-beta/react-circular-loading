import React from 'react';
import { render } from 'react-dom';
import { circularLoading }  from '../lib/index';

const CircularLoading = circularLoading({
  num: 12,
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <h1>React Circular Loading Example</h1>
        <CircularLoading />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
