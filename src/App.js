import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 1. 简单数据绑定(jsx语法)
// 2. 属性也可以进行绑定
// 3. {}中可以执行任何的js代码：三元运算， 函数调用等...

const date = Date.now();
const element = (
  <span>
    我是来自 aicoder.com 的高级讲师！！！
  </span>
);

const pId = 'aicoder';
const num = 7;

class App extends Component {

  getDay(num) {
    return (
      <span>
        周 { parseInt(num % 7) }
      </span>
    );
  }

  render() {
    return (
      <div className="App">
        <h1 id={ pId }>aicoder.com </h1>
        <p>当前的时间是： { date } </p>
        <div className="article">
          { element }
        </div>
        <hr/>
        <p>{ this.getDay(333) }</p>
        <p> { num > 8 ? 'hi,aicoder' : 'null'}</p>
      </div>
    );
  }
}

export default App;
