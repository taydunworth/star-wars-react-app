import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }
  }
  _nameChange = (event) => {
    this.setState({ pilot: event.target.value })
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <div className="form">
        <h3 className="display-5">What Is Your Name, Pilot?</h3>
        <input type="name" className="form-control" id="name" placeholder="Enter Your Name" value={this.state.pilot} onChange={this._nameChange} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <h2 clasName="display-3">{this.state.pilot}</h2>
      </div>
    )
  }
}

export default Form
