import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="card" id="input-form">
        <h4>What's your name, pilot?</h4>
        <form onSubmit={this.props.handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Enter your name"
            name="value"
            onKeyUp={this.props.handleInputChange}
          />
          <button type="submit"
          value="submit" className="btn btn-primary"
          disabled={!this.props.value} >Submit</button>
        </form>
        <h2>
          {this.props.pilot}
        </h2>
      </div>
    );
  }
}

export default Form;
