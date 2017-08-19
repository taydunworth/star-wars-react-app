import React, { Component } from 'react'

class Vehicles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then(res => res.json()).then(({ results }) => {
      this.setState({ vehicles: results })
    })
  }

  render() {
    let vehicles = this.state.vehicles.map(vehicle => {
      return (
        <div className="col-sm-4" key={vehicle.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">Vehicle: {vehicle.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h5>
            </div>
            <div className="card">
              <div className="card-block">
                <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
                <ul className="list-group">
                  <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                  <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                  <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                  <li className="list-group-item">Crew: {vehicle.crew}</li>
                  <li className="list-group-item">Length: {vehicle.length}</li>
                  <li className="list-group-item">Mass Speed: {vehicle.max_atmosphering_speed}</li>
                  <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>{vehicles}</div>
    )
  }
}

export default Vehicles
