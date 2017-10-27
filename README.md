# react-circular-loading

[![npm version](https://badge.fury.io/js/%40yami_beta%2Freact-circular-loading.svg)](https://www.npmjs.com/package/@yami_beta/react-circular-loading)

react-circular-loading is React Component for Loading.

![react-circular-loading demo](https://raw.githubusercontent.com/yami-beta/react-circular-loading/master/demo.gif)

## How To Use

### Step 1

```sh
$ npm install @yami_beta/react-circular-loading
```

or

```sh
$ yarn add @yami_beta/react-circular-loading
```

### Step 2

Import and generate `CircularLoading` component by `circularLoading()`.

```js
import React from 'react';
import { render } from 'react-dom';
import { circularLoading }  from '@yami_beta/react-circular-loading';

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
```

## Options

```js
circularLoading({
  // Distance of dot from center
  distance: 4,
  // Dot's size (`em`)
  dotSize: 1,
  // Dot's color (base color)
  dotColor0: `rgba(50, 51, 52, 0.1)`,
  // Dot's color (semi highlight color)
  dotColor1: `rgba(50, 51, 52, 0.2)`,
  // Dot's color (highlight color)
  dotColor2: `rgba(50, 51, 52, 1.0)`,
  // A number of dots
  num: 8,
  // Animation speed (`ms`)
  speed: 1000,
});

```

## LICENSE

MIT
