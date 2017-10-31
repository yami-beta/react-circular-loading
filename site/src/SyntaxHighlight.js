import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './SyntaxHighlight.css';

export default class SyntaxHighlight extends React.Component {
  componentWillMount() {
    this.setState({
      highlighted: hljs.highlight(this.props.lang, this.props.code).value,
    });
  }

  render() {
    return (
      <pre className="syntax-highlight">
        <code className={`hljs ${this.props.lang}`} dangerouslySetInnerHTML={{ __html: this.state.highlighted }}>
        </code>
      </pre>
    );
  }
}
