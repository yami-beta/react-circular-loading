import React from 'react';
import SyntaxHighlight from './SyntaxHighlight';

const code = `$ npm install @yami_beta/react-circular-loading
$ # OR
$ yarn add @yami_beta/react-circular-loading`;

const Installation = (props) => {
  return (
    <section className="installation">
      <h2>Installation</h2>
      <SyntaxHighlight code={ code } lang="bash" />
    </section>
  );
};

export default Installation;
