import React, { Component } from 'react'

class FromDemo extends Component {
  constructor(opt) {
    super(opt);
    this.state = {
      Name: '',
      Mail: '',
      Remark: '',
      Province: 1
    };
  }

  handlerNameChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlerEmailChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlerRemarkChange = e => {
    this.setState({
      Remark: e.target.value
    });
  }

  handlerProChange = e => {
    this.setState({
      Province: e.target.value
    });
  }

  handleFootballChange = e => {
    console.log(e.target.checked);
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
          <br/>
          Provice： { this.state.Province }
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
              <tr>
                <td><label htmlFor="Province">省：</label></td>
                <td>
                  <select 
                    id="Province"
                    name="Province" 
                    onChange={this.handlerProChange}
                    value={this.state.Provicne}
                  >
                    <option value="1">北京</option>
                    <option value="2">上海</option>
                    <option value="3">河北</option>
                    <option value="4">山东</option>
                    <option value="5">山西</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="Province">爱好：</label></td>
                <td>
                  <label>
                    篮球：
                    <input type="checkbox" name="BasketBall" id="BasketBall"/>
                  </label>
                  <br/>
                  <label>
                    足球：
                    <input onChange={this.handleFootballChange} type="checkbox" name="Football" id="Football"/>
                  </label>
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