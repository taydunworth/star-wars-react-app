import React, { Component } from 'react'

class Vehicles extends Component {
  render() {
    return (
      // LIFECYCLE
      // Which lifecycle is best for fetching data?
      // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
      // Once you have fetched that data, set the state of vehicles to the fetched data.
      // In your response look for 'results'. It should return this array.
      // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
      // Enter your code below:


      // RENDER
      // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
      // Map over the data.
      // Don't forget to set the 'key'. In this case, use the vehicle name.
      // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
      // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
      // Enter your code below:

      render() {
        /*
        Store vehicles state in a variable.
        Map over this variable to access the values needed to render.
        */
      }
    )
  }
}

export default Vehicles
