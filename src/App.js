import React, { Component } from "react";
import SubmitItem from "./components/SubmitItem";
import ShowItem from "./components/ShowItem";
import AddPoints from "./components/AddPoints";
import "./css/app.css";

class App extends Component {
  state = {
    term: "",
    items: ["Appels", "Peren"],
    points: null
  };

  // Changes the term value when the input on submitItem is changed.
  onChange = event => {
    const { value } = event.target;

    this.setState({ term: value });
  };

  // Function for SubmitItem, adds the new term to items, and refreshes the term to empty string.
  onSubmit = e => {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log();
    }

    this.setState({ term: "", items: [...this.state.items, this.state.term] });
    this.addPointsFunc();
  };

  // Add points on added list item.
  addPointsFunc = () => {
    this.setState(prevState => {
      return {
        points: this.state.items.length
      };
    });
  };

  render() {
    return (
      <div className="main-content">
        <div>
          <h1>Nick Productivity</h1>
        </div>
        <SubmitItem
          onChange={this.onChange}
          value={this.state.term}
          onSubmit={this.onSubmit}
        />
        <ShowItem items={this.state.items} />
        <AddPoints points={this.state.points} />
      </div>
    );
  }
}

export default App;
