import React, { Component } from 'react'

class DangerouslyHTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dom: `
        <div> demo </div>
      `,
      domDanger: {
        // 绑定对象： 必须有__html属性。属性值就绑定页面上去的内容。
        __html: `
          <div>danger htmls</div>
          <p>aicoder.com</p>
        `
      }
    }
  }
  render () {
    return (
      <div>
        { this.state.dom }
        <hr/>
        <div dangerouslySetInnerHTML={ this.state.domDanger }></div>
      </div>
    )
  }
}

export default DangerouslyHTML