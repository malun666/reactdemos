import React, { Component } from 'react';
import './App.css';

// import Welcome from './components/Welcome';
// import JSXDemo from './components/JSXDemos';
// import PropDemo from './components/PropDemo';
// import Clock from './components/Clock';
// import ReactLife from './components/ReactLife';
// import EventDemo from './components/EventDemo';

// import NewsList from './components/NewsList';
// import FormDemo from './components/FormDmoe';
// import FormMulDemo from './components/FormMulDemo';
// import FormSub from './components/FormSub';
// import Greeting from './components/Greeting';
import StateLifting from './components/StateLifting';
import Dialog from './components/Dialog';
import JSXFun from './components/JSXFun';
import PropChildren from './components/PropChildren';

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
        {/* <NewsList /> */}
        {/* <FormDemo /> */}
        {/* <FormMulDemo /> */}
        {/* <FormSub /> */}
        {/* <Greeting /> */}
        {/* <StateLifting /> */}
        <Dialog 
          title="添加用户的对话框！" 
          footer={
            <div>footer</div>
          }
        >
          <p>这是一个子嵌套的内容！</p>
          <StateLifting />
          <JSXFun cname="Msg"></JSXFun>
        </Dialog>

        <PropChildren>
          <StateLifting></StateLifting>
          sfs
          <StateLifting></StateLifting>
          <hr/>
          {/* 布尔类型、null、undefined不会被显示到页面上！ */}
          {true}
          {false}
          null: {null}
          {undefined}
          <hr/>
        </PropChildren>
      </div>
    );
  }
}

export default App;
