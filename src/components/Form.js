import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="card">
        <h4>What's your name, pilot?</h4>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="value"
            onKeyUp={this.props.handleInputChange}
          />
          <input type="submit" 
          value="submit" 
          disabled={!this.props.value} />
        </form>
        <h2>
          {this.props.pilot}
        </h2>
      </div>
    );
  }
}

export default Form;
