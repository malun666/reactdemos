import React, { Component } from 'react';
import './App.css';

// import Welcome from './components/Welcome';
// import JSXDemo from './components/JSXDemos';
// import PropDemo from './components/PropDemo';
// import Clock from './components/Clock';
// import ReactLife from './components/ReactLife';
// import EventDemo from './components/EventDemo';

import NewsList from './components/NewsList';

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
        {/* 函数组件 */}
        {/* <Welcome name="laoma, aicoder.com" /> */}

        {/* 类组件 */}
        {/* <JSXDemo /> */}

        {/* <PropDemo kk="aicoder.com from the props" /> */}

        {/* this.state.isShowLife && <ReactLife kk={ this.state.kk } /> */}
        <hr/>
        {/* <Clock />  */}

        {/* <EventDemo /> */}
        <NewsList />
      </div>
    );
  }
}

export default App;
