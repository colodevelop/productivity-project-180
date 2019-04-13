import React, { Component } from "react";
import SubmitItem from "./components/SubmitItem";

import "./css/app.css";

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <div>
          <h1 className="main-header">Project 180 °</h1>
        </div>
        <SubmitItem
          selectValue={this.selectValue}
          addPointsFunc={this.addPointsFunc}
        />
      </div>
    );
  }
}

export default App;
