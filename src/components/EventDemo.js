import React, { Component } from 'react'

class EventDemo extends Component {

  constructor(opt) {
    super(opt);
    // 让handlerClick 对象指向了一个延迟绑定了当前对象实例的函数。
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(e) {
    console.log( this);
  }

  handlerClick2(e) {
    console.log(this);
  }

  addNum(a, b, e) {
    console.log(this);
    console.log(a + b);
    console.log(e);
  }

  // stage 3 
  demoFun = (e) => {
    console.log(this);
  }

  render () {
    return (
      <div>
        {/* <button onClick={ console.log(3) }>
          1. 简单按钮事件. 不建议使用，每次刷新绑定都会执行js代码。
        </button> */}
        <button onClick={ e => console.log(this) }>
          2. 简单按钮直接绑定 箭头函数的绑定事件方法
        </button>
        <br/>
        <button onClick={ this.handlerClick }>
          3. 直接绑定一个类自己的内部的函数
        </button>
        <br/>
        <button onClick={ this.handlerClick2.bind(this) }>
          4. 在dom中直接绑定一个类自己的内部的函数，并设置this
        </button>
        <br/>
        <button onClick={ this.addNum.bind(this, 3, 4) }>
          5. 给事件传递参数
        </button>
        <button onClick={ this.demoFun }>
          6. 给事件传递参数
        </button>

      </div>
    )
  }
}

export default EventDemo