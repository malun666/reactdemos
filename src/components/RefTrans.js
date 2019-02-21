import React, { Component } from 'react'
import CustomInput from './CustomInput';

class RefTrans extends Component {
  constructor(props) {
    super(props);
    this.txtInput = null;
  }

  render () {
    return (
      <div>
        <input onClick={ ()=>{this.txtInput.focus()}} type="button" value="让子组件的文本框获得焦点"/>
        <CustomInput 
          parentRefFun={ element => this.txtInput = element }
        >
        </CustomInput>
      </div>
    )
  }
}

export default RefTrans