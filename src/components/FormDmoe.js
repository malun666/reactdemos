import React, { Component } from 'react'

class FromDemo extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      Name: '',
      Mail: ''
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

  render () {
    return (
      <div>
        <p>
          hi  { this.state.Name }！
          email to : { this.state.Mail }
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
                    onChange={this.handlerEmailChange}
                  />
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