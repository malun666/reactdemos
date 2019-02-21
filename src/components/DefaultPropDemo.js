import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DefaultPropDemo extends Component {
  // 设置组件的默认值，注意：首先进行属性的默认值赋值，然后再进行校验
  static defaultProps = {
    // key： 属性的名字。 右侧value值是：属性默认值。
    kname: 'https://www.aicoder.com'
  }

  static propTypes = {
    // key： 属性的名字。 右侧value值是：属性校验规则
    kname: PropTypes.number
  }

  render () {
    return (
      <div>
        { this.props.kname }
      </div>
    )
  }
}

export default DefaultPropDemo