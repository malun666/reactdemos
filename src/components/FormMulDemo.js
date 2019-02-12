import React, { Component } from 'react'

class FormMulDemo extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      Name: '',
      Mail: '',
      IsAdmin: true,
      IsRem: true
    };
  }

  handlerChange = e => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox'? e.target.checked :e.target.value
    });
  };

  render () {
    return (
      <div>
        <form>
          <label>
            用户名： 
            <input 
              type="text" 
              name="Name"
              onChange={this.handlerChange}
              value={this.state.Name}
            />
          </label>
          <br/>
          <label>
            邮箱： 
            <input 
              type="text" 
              name="Mail"
              onChange={this.handlerChange}
              value={this.state.Mail}
            />
          </label>
          <label>
            是否是管理员： 
            <input 
              type="checkbox" 
              name="IsAdmin"
              onChange={this.handlerChange}
              defaultChecked={this.state.IsAdmin}
            />
          </label>
          <label>
            是否记住用户密码： 
            <input 
              type="checkbox" 
              name="IsRem"
              onChange={this.handlerChange}
              defaultChecked={this.state.IsRem}
            />
          </label>
        </form>
        <hr/>
        name: {this.state.Name} <br />
        mail: {this.state.Mail} <br />
        isadmin: {this.state.IsAdmin ? 'true' : 'false'} <br />
        IsRem: {this.state.IsRem ? 'true' : 'false'}
      </div>
    )
  }
}

export default FormMulDemo