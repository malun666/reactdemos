import React, { Component } from 'react';

class FormSub extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      Title: 'hi',
      Validate: {
        Title: {
          required: true,
          minLen: 6,
          maxLen: 10,
          validate: true,
          msg: '*ToDo不能为空！'
        }
      }
    }
  }

  handlerChange = (e) => {
    // 设置状态：是异步执行。
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.validateInput();
    });
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    // 第一： 做表单的校验
    this.validateInput();
    // 第二： 做表单提交到后台ajax请求
  };

  validateInput() {
    let { Title, Validate } = this.state;
    let tempValidate = false;
    const len = Title.length;
    const min = Validate.Title.minLen;
    const max = Validate.Title.maxLen;
    if(len >= min && len <= max) {
      tempValidate = true;
    }

    this.setState(preState => {
      return Object.assign({}, preState, {
        Validate: {
          Title: Object.assign({}, preState.Validate.Title,{
            validate: tempValidate,
          })
        }
      });
    })    
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <hr/>
        <label>
          ToDo：
          <input 
            type="text"
            name="Title"
            onChange={this.handlerChange}
            value={this.state.Title}
          />
          {
            !this.state.Validate.Title.validate &&
            <span 
              style={{color: 'red'}}
            >
              {this.state.Validate.Title.msg}
            </span>
          }
        </label>
        <br/>
        <input type="submit" value="提交"/>
      </form>
    );
  }
}

export default FormSub;