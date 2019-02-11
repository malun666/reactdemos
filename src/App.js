import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import JSXDemo from './components/JSXDemos';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>aicoder.com </h1>
        <hr/>
        {/* 函数组件 */}
        <Welcome name="laoma, aicoder.com" />

        {/* 类组件 */}
        <JSXDemo></JSXDemo>
      </div>
    );
  }
}

export default App;
