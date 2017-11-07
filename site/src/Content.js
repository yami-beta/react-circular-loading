import React from 'react';
import ComponentSample from './ComponentSample';
import Installation from './Installation';
import './Content.css';

const Content = (props) => {
  return (
    <div className="content">
      <section className="abstruction">
        <h2>About</h2>
        <p>React Circular Loading is React component for loading.</p>
        <p>Github Repository: <a href="https://github.com/yami-beta/react-circular-loading">react-circular-loading</a></p>
      </section>
      <ComponentSample></ComponentSample>
      <Installation></Installation>
    </div>
  );
};

export default Content;
