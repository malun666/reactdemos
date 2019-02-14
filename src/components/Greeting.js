import React, { Component } from 'react'

function UserGreeting(props) {
  return (
    <p>欢迎： { props.UserName }</p>
  );
}

function GuestGreeting(props) {
  return (
    <p>请登录！</p>
  );
}

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  render () {
    let greeting = <GuestGreeting />;
    if(this.state.isLogin) {
      greeting = <UserGreeting UserName="aicoder.com"/>
    }
    return (
      <div>
        <h3>1. 基本的通过if实现的条件渲染</h3>
        { greeting }
        <hr/>
        <h3>2. 通过三元运算符实现条件渲染</h3>
        {
          this.state.isLogin ? 
            <UserGreeting UserName="aicoder.com" /> 
            :
            <GuestGreeting></GuestGreeting>
        }
        <hr/>
        <h3>3. 通过&&实现条件渲染</h3>
        {
          this.state.isLogin &&
            <UserGreeting UserName="aicoder.com" /> 
        }
        {
          this.state.isLogin || 
             <GuestGreeting></GuestGreeting>
        }
      </div>
    )
  }
}

export default Greeting