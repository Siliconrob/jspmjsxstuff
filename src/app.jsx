import React, { Component } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    class TestComponent extends Component {
      constructor(...args) { super(...args); }
      render() {
        return (<div>test</div>);
      }
    }
  ),
  document.getElementById('test')
);