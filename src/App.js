import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 1. 简单数据绑定(jsx语法)
// 2. 属性也可以进行绑定
// 3. {}中可以执行任何的js代码：三元运算， 函数调用等...
// 4. jsx防注入
// 5. 怎么把一个数组直接显示在页面上

const date = Date.now();
const element = (
  <span>
    我是来自 aicoder.com 的高级讲师！！！
  </span>
);

const pId = 'aicoder';
const num = 7;
const dElement = '<h3>sdsf</h3>';
const arr = [
  <div>这是数组中的第一个元素</div>,
  <div>这是第二个元素！</div>,
  '<span>这是字符串！！</span>'
];

const arrCities = [ '北京', '上海', '天津'];

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
        <hr/>
        <div>
          { dElement }
        </div>
        <hr/>
        <div>
          这是数组的绑定展示：
          { arr }
        </div>
        <hr/>
        <div>
          所有的城市：
          <ul>
            {
              arrCities.map(item => {
                return (
                  <li> { item } </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
