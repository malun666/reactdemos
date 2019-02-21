import React, { Component } from 'react';

class CustomInput extends Component {
  render() {
    return (
      <div>
        <input ref={this.props.parentRefFun} type="text"/>
      </div>
    );
  }
}

export default CustomInput;