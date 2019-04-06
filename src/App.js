import React, { Component } from "react";
import SubmitItem from "./components/SubmitItem";
import ShowItem from "./components/ShowItem";
import AddPoints from "./components/AddPoints";
import "./css/app.css";

class App extends Component {
  state = {
    term: "",
    items: ["Appels", "Peren"],
    toDoValue: "Work",
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

    this.setState({ term: "", items: [...this.state.items, this.state.term] });
    this.addPointsFunc();
  };

  // Add points on added list item.
  addPointsFunc = () => {
    // Looks at what kind of value is chosen 'Work' or 'school' etc. And calculates how many points he can get.
    // The harder the task was, the more points you will get.

    this.setState(prevState => {
      if (this.state.toDoValue === "Work") {
        return {
          points: prevState.points + 1
        };
      } else if (this.state.toDoValue === "School") {
        return {
          points: prevState.points + 2
        };
      } else {
        return {
          points: prevState.points + 3
        };
      }
    });
  };

  //Selects the value to understand what kind of task it was.
  selectValue = e => {
    const { value } = e.target;
    this.setState({ toDoValue: value }, () => {
      console.log(this.state.toDoValue);
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
          toDoValue={this.state.toDoValue}
          selectValue={this.selectValue}
        />
        <ShowItem items={this.state.items} />
        <AddPoints points={this.state.points} />
      </div>
    );
  }
}

export default App;
