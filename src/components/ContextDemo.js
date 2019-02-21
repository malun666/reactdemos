import React, { Component } from 'react'

import LocalContext from '../Contextes/LocalContext';

const { Provider, Consumer } = LocalContext; 

function Container(props) {
  return <Title />
}

function Title(props) {
  return (
    <div>
      <Consumer>
        { context => {
          return (
            <div>
              {context.name} - { context.age}
            </div>
          )
        }}
      </Consumer>
    </div>
  )
}

class ContextDemo extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      User: {
        age: 19,
        name: 'aicoder'
      }
    }
  }
  

  render () {
    return (
      <div>
        <Provider value={ this.state.User }>
          <Container></Container>
        </Provider>
        <hr/>
        <input 
          onClick={
            () => this.setState(preState => {
              return {User: { ...preState.User, age: preState.User.age + 1 }}
            })
          }
          className="button is-primary"
          value={ this.state.User.name }
          type="button"/>
      </div>
    )
  }
}

export default ContextDemo