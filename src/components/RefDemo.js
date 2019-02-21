import React, { Component } from 'react'

import Clock from './Clock';

/**
 * 应用场景：
 * 1. 需要直接操作dom元素，执行dom的api的情况，比如：直接控制按钮获取焦点
 * 2. 父组件中需要直接操作子组件的实例
 * 3. 引用第三方库，需要直接操作dom的。
 */

class RefDemo extends Component {
  constructor(props) {
    super(props);
    // 给当前的组件添加一个textInput属性，属性是一个ref。
    // ref可以帮助我们直接拿到dom元素的dom对象或者React组件的实例。
    this.textInput = React.createRef();
    this.clockRef = React.createRef();
    this.pElement = null;
  }

  focusInput = (e) => {
    // 直接可以拿到ref执向的dom对象。
    this.textInput.current.focus();
  };

  getColckInst = (e) => {
    // 通过ref可以直接拿到子的React的组件。
    console.log(this.clockRef.current);
  }

  render () {
    return (
      <div>
      {/* 第一种写法，拿到dom节点 */}
        <input type="text" ref={this.textInput} />
        <input onClick={this.focusInput} type="button" value="获取焦点" />
        <hr/>
        {/* 第二种写法： 拿到React组件 */}
        <Clock ref={this.clockRef}></Clock>
        <input onClick={this.getColckInst} type="button" value="获取时钟组件的实例" />
        <hr/>
        {/* 第三种：可以直接使用函数的方式拿到dom或者React的实例 */}
        <input type="text" ref={ element => this.pElement = element } />
        <input onClick={ ()=> { this.pElement && this.pElement.focus() }} type="button" value="让p标签，获得焦点aicoder.com" />
      </div>
    )
  }
}

export default RefDemo