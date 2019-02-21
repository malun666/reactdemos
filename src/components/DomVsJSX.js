import React, { Component } from 'react'
import '../styles/Dom.css';

class DomVsJSX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    }
  }

  handlerChange = (e) => {
    this.setState({
      isChecked: e.target.checked
    });
  };

  render () {
    return (
      <div>
        <input 
          type="checkbox" 
          checked={ this.state.isChecked }
          onChange={ this.handlerChange }
        />
        <h3>defaultChecked for checkbox</h3>
        <input type="checkbox" defaultChecked={ this.state.isChecked } />
        <p className={ `${this.state.isChecked ? 'checked' : ''} kk` }>指定className</p>
        <h3>htmlFor</h3>
        <label htmlFor="demo">选择文本框</label>
        <input type="text" id="demo"/>
        <h3>Style处理</h3>
        <p style={{
          color: 'red',
          fontSize: '30px',
          backgroundColor: 'blue'
        }}>我是样式处理</p>
      </div>
    )
  }
}

export default DomVsJSX