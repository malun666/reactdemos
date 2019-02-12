import React, { Component } from 'react'

class FromDemo extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      Name: '',
      Mail: '',
      Remark: ''
    };
  }

  handlerNameChange = (e) => {
    this.setState({
      Name: e.target.value
    });
  };

  handlerEmailChange = (e) => {
    this.setState({
      Mail: e.target.value
    });
  }

  handlerRemarkChange = e => {
    this.setState({
      Remark: e.target.value
    });
  }

  render () {
    return (
      <div>
        <p 
          onClick={(e) => { this.setState(preState => {
            return {
              Remark: preState.Remark + '1'
            }
          })}}
        >
          hi  { this.state.Name }！
          email to : { this.state.Mail }
          <br/>
          remark: { this.state.Remark }
        </p>
        <hr/>
        <form>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="txtName">用户名：</label></td>
                <td>
                  <input 
                    onChange={this.handlerNameChange} 
                    type="text" 
                    id="txtName" 
                    name="Name" 
                    value={this.state.Name}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="txtMail">邮箱：</label></td>
                <td>
                  <input 
                    id="txtMail" 
                    type="text" 
                    name="Mail" 
                    value={this.state.Mail}
                    onChange={this.handlerEmailChange}
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="txtRemark">备注：</label></td>
                <td>
                 <textarea
                  id="txtRemark"
                  name="Remark"
                  value={ this.state.Remark }
                  onChange={this.handlerRemarkChange}
                 >
                 </textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default FromDemo