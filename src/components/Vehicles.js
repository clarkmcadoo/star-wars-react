import React, { Component } from "react";

class Vehicles extends Component {
  render() {
    let spaceShips = this.props.vehicles.map(e => {
      return (
                <div className="card">
          <div className="card-block">
            <h4 className="card-title">
              {e.name}
            </h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Model: {e.model}
            </h6>
            <div className="card">
              <h6 className="card-subtitle mb-2 text-muted">Specs</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Manufacturer: {e.manufacturer}</li>
                <li className="list-group-item">Class: {e.vehicle_class}</li>
                <li className="list-group-item">Passengers: {e.passengers}</li>
                <li className="list-group-item">Crew: {e.crews}</li>
                <li className="list-group-item">Length: {e.length}</li>
                <li className="list-group-item">Max Speed:{e.max_atmosphering_speed}</li>
                <li className="list-group-item">Cargo Capacity: {e.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className = "vehicles-card">
        {spaceShips}
      </div>
    );
  }
}

export default Vehicles;
