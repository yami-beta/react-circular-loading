import React from 'react';
import SyntaxHighlight from './SyntaxHighlight';
import { circularLoading } from '@yami-beta/react-circular-loading';
import './ComponentSample.css';

const CircularLoading = circularLoading();
const CircularLoadingCustomDots = circularLoading({ num: 12 });
const CircularLoadingCustomSpeed = circularLoading({ speed: 2000 });

const ComponentSample = (props) => {
  return (
    <section className="component-sample">
      <h2>Usage</h2>

      <div className="cl-samples">
        <div className="cl-samples__item">
          <h3>Default</h3>
          <div className="cl-samples__item-content">
            <div className="cl-samples__component">
              <CircularLoading />
            </div>
            <div className="cl-samples__code">
              <SyntaxHighlight lang="javascript" code={
`const CircularLoading = circularLoading();
const App = () => {
  return <CircularLoading />;
};`
              } />
            </div>
          </div>
        </div>
        <div className="cl-samples__item">
          <h3>Customize the number of dot</h3>
          <div className="cl-samples__item-content">
            <div className="cl-samples__component">
              <CircularLoadingCustomDots />
            </div>
            <div className="cl-samples__code">
              <SyntaxHighlight lang="javascript" code={
`const CircularLoading = circularLoading({ num: 12 });
const App = () => {
  return <CircularLoading />;
};`
              } />
            </div>
          </div>
        </div>
        <div className="cl-samples__item">
          <h3>Customize speed</h3>
          <div className="cl-samples__item-content">
            <div className="cl-samples__component">
              <CircularLoadingCustomSpeed />
            </div>
            <div className="cl-samples__code">
              <SyntaxHighlight lang="javascript" code={
`const CircularLoading = circularLoading({ speed: 2000 });
const App = () => {
  return <CircularLoading />;
};`
              } />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentSample;
