import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const myElement = <h1>heading</h1>

    let cars = [
      { make: 'Opel', model: 'Astra' },
      { make: 'Opel', model: 'Astra' }
    
    ]
    
    const myCarsElement = cars.map(car =>(
      <div>{car.make} - {car.model}</div>
    ))
    return (
      <div>
        {myCarsElement}
        <p>
          hello world
        </p>
      </div>

    )
  }
}

export default App;
