import React, { Component } from "react";

class AddPoints extends Component {
  render() {
    const { points } = this.props;
    return (
      <div>
        <h1>Points: </h1>
        <h1>{points}</h1>
      </div>
    );
  }
}

export default AddPoints;
