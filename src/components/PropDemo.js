import React, { Component } from 'react'

class PropDemo extends Component {

  // 定义组件内部私有的状态（数据）
  constructor(opt) {
    super(opt);

    // 只有在构造函数中可以直接给state进行赋值初始化
    this.state = {
      num: 0,
      phone: 991
    }; // 初始化一个组件自己的状态
  }

  // 组件渲染到页面上了之后，每隔1s中修改一下页面中的num ++
  componentDidMount() {
    setInterval(() => {
      // 如果是直接修改那么就用下面这种方式。
      // this.setState({num: 1});
      // this.setState({num: 1 + this.state.num});  // bad 不推荐

      // 需要依赖之前的状态做相关计算，需要使用下面的这种方法进行修改状态。
      this.setState((preState) => {
        return {num: preState.num + 1}
      });
    }, 1000)
  }

  render () {
    return (
      <div>
        <h3>props demo</h3>
        <p>当前组件的属性：kk-{ this.props.kk } </p>
        <p> num-{ this.state.num }</p>
        <p> phone-{ this.state.phone }</p>
      </div>
    )
  }
}

export default PropDemo