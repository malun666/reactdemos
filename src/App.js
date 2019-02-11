import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import JSXDemo from './components/JSXDemos';
import PropDemo from './components/PropDemo';

import ReactLife from './components/ReactLife';
class App extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      kk: 'ReactLife',
      isShowLife: true
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        kk: 'aicoder.com'
      });
    }, 2000);

    setTimeout( () => {
      this.setState({
        isShowLife: false
      });
    }, 4000);
  }

  render() {
    return (
      <div className="App">
        <h1>aicoder.com </h1>
        <hr/>
        {/* 函数组件 */}
        {/* <Welcome name="laoma, aicoder.com" /> */}

        {/* 类组件 */}
        {/* <JSXDemo /> */}

        {/* <PropDemo kk="aicoder.com from the props" /> */}

        {
          this.state.isShowLife && <ReactLife kk={ this.state.kk } />
        }
      </div>
    );
  }
}

export default App;
