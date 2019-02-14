import React, { Component } from 'react'

function AddMsg(props) {
  return (
    <button
      className="button is-primary"
      onClick={ () => props.AddNum(1) }
    >
      添加消息: { props.Num }
    </button>
  );
}

function DelMsg(props) {
  return (
    <button
      className="button is-danger"
      onClick={ () => props.DelNum(1) }
    >
      删除消息: { props.Num }
    </button>
  );
}

class StateLifting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Num: 0
    };
  }

  AddNum = (num) => {
    this.setState(preState => {
      return {
        Num: preState.Num + num
      }
    });
  }

  DelNum = (num) => {
    this.setState(preState => {
      return {
        Num: preState.Num - num
      }
    });
  }

  render () {
    return (
      <div>
        总消息条数是： { this.state.Num }
        <hr/>
        <AddMsg 
          Num={ this.state.Num } 
          AddNum = { this.AddNum }
        />
        <DelMsg 
          Num = { this.state.Num }
          DelNum = { this.DelNum }
        />
      </div>
    )
  }
}

export default StateLifting