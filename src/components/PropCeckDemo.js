import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PropCheckDemo extends Component {

  static propTypes = {
    // kname属性必须是string类型，而且要求必须提供属性值
    kname: PropTypes.string.isRequired,
    tid: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
  }

  render () {
    return (
      <div>
        { this.props.kname }
        <hr/>
        { this.props.children }
      </div>
    )
  }
}

// 第一种写法： 在类定义的外部直接通过类型直接设置propTypes
// PropCheckDemo.propTypes = {
//   // kname属性必须是string类型，而且要求必须提供属性值
//   kname: PropTypes.string.isRequired,
//   tid: PropTypes.number.isRequired,
//   children: PropTypes.element.isRequired
// }

export default PropCheckDemo