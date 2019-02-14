import React, { Component } from 'react'

class PropsChildren extends Component {
  render () {
    return (
      <div>

        <button onClick={ ()=> { console.log(this.props.children); }}>获取孩子内容</button>
        <hr/>
        { this.props.children }
      </div>
    )
  }
}

export default PropsChildren