import React, { Component } from "react";
import SubmitItem from "./components/SubmitItem";
import ShowItem from "./components/ShowItem";
import "./css/app.css";

class App extends Component {
  state = {
    item: "Appelsap",
    points: null
  };

  onChange = event => {
    const { value } = event.target;

    this.setState({ item: value });
  };

  render() {
    return (
      <div className="main-content">
        <div>
          <h1>Productivity App</h1>
        </div>
        <SubmitItem />
        <ShowItem item={this.state.item} />
      </div>
    );
  }
}

export default App;
