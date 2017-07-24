import React, {Component} from 'react';
import '../styles/App.css';

import Form from './Form.js';
import Vehicles from './Vehicles.js';
import Title from './Title.js';

class App extends Component {
  constructor(props){
    super(props)
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
    this.state = {
      vehicles: [],
      pilot: "",
      value: ""
    };
  }


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleInputChange = event => {
    console.log("onKeyUp:", event.target.value, this.state.value);
    let value = event.target.value;
    this.setState({value});
  }



  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit = (e) => {
    e.preventDefault();
    return this.setState({pilot: this.state.value})
  }
  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentWillMount(){
    fetch("https://swapi.co/api/vehicles/").then(response =>{
      return response.json().then( data=> {
        console.log("Spaceship data:", data);

        this.setState({vehicles: data.results});
    });
    });
  }


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

    return (
      <div className="App">
          <Title/>
          <Form
          pilot = {this.state.pilot}
          value = {this.state.value}
          handleInputChange = {this.handleInputChange}
          handleSubmit = {this.handleSubmit}/>
          <Vehicles vehicles={this.state.vehicles} />
      </div>
    );
  }
}

export default App;

