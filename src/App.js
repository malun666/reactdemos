import React, { Component } from 'react';
import './App.scss';

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
// import StateLifting from './components/StateLifting';
// import Dialog from './components/Dialog';
// import JSXFun from './components/JSXFun';
// import PropChildren from './components/PropChildren';

// import PropCheckDemo from './components/PropCeckDemo';
// import DefaultPropDemo from './components/DefaultPropDemo';
// import RefDemo from './components/RefDemo';

// import RefTrans from './components/RefTrans';
// import DomVsJSX from './components/DomVsJSX';
import DangerouselyHTML from './components/DangerouslyHTML';
import ContextDemo from './components/ContextDemo';
import axios from 'axios';

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

    // 发送ajax请求 http://yapi.demo.qunar.com/mock/24076/api/message
    axios.get('/api/message')
    .then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>aicoder.com </h1>
        <h3>{process.env.REACT_APP_AICODER}</h3>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
        {/* <img src="/1.png" alt=""/> */}
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
        {/* <Dialog 
          title="添加用户的对话框！" 
          footer={
            <div>footer</div>
          }
        >
          <p>这是一个子嵌套的内容！</p>
          <StateLifting />
          <JSXFun cname="Msg"></JSXFun>
        </Dialog> */}
{/* 
        <PropChildren>
          <StateLifting></StateLifting>
          sfs
          <StateLifting></StateLifting>
          <hr/>
          {true}
          {false}
          null: {null}
          {undefined}
          <hr/>
        </PropChildren> */}
        {/* <PropCheckDemo kname={'sss'} tid={4}>
          <p>你好啊！</p>
        </PropCheckDemo>
        <PropCheckDemo kname="dd" tid={3}>
          <p>aicoder.com</p>
        </PropCheckDemo> */}

        {/* <DefaultPropDemo kname={2}></DefaultPropDemo>
        <RefDemo>

        </RefDemo> */}

        {/* <RefTrans></RefTrans> */}
        {/* <DomVsJSX></DomVsJSX> */}
        {/* <DangerouselyHTML></DangerouselyHTML> */}
        <ContextDemo></ContextDemo>
      </div>
    );
  }
}

export default App;
