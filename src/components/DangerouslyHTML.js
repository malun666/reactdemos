import React, { Component } from 'react'

class DangerouslyHTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dom: `
        <div> demo </div>
      `,
      domDanger: {
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