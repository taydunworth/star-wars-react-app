import React, { Component } from 'react'
import '../styles/App.css'
import Jumbotron from './Jumbotron'
import Form from './Form'
import Vehicles from './Vehicles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          <Form />
          <Vehicles />
        </div>
      </div>
    )
  }
}

export default App
