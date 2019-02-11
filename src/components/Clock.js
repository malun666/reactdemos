import React, { Component } from 'react'

class Clock extends Component {
  constructor(opt) {
    super(opt);

    this.state = {
      now: new Date().toLocaleTimeString(),
      timer: null
    };
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.setState({
          now: new Date().toLocaleTimeString()
        });
      }, 1000)
    }) 
  }

  componentWillUnmount() {
    if(this.state.timer) {
      clearInterval(this.state.timer);
    }
  }

  render () {
    return (
      <div>
        <p>当前的时间是： { this.state.now } </p>
      </div>
    )
  }
}

export default Clock