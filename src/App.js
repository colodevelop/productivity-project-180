import React, { Component } from "react";
import SubmitItem from "./components/SubmitItem";
import ShowItem from "./components/ShowItem";
import AddPoints from "./components/AddPoints";
import "./css/app.css";

class App extends Component {
  state = {
    term: "",
    items: [],
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

  // Add points depending on how hard the task was.
  addPointsFunc = () => {
    const toDoValue = this.state.toDoValue;
    // Looks at what kind of value is chosen 'Work' or 'school' etc. And calculates how many points he can get.
    // The harder the task was, the more points you will get.
    this.setState(prevState => {
      if (toDoValue === "Work") {
        return {
          points: prevState.points + 1
        };
      } else if (toDoValue === "School") {
        return {
          points: prevState.points + 2
        };
      } else if (toDoValue === "Fun") {
        return {
          points: prevState.points - 1
        };
      } else if (toDoValue === "Series") {
        return {
          points: prevState.points - 2
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
          <h1 className="main-header">Project 180 °</h1>
        </div>
        <SubmitItem
          onChange={this.onChange}
          value={this.state.term}
          onSubmit={this.onSubmit}
          toDoValue={this.state.toDoValue}
          selectValue={this.selectValue}
        />

        <div className="split">
          <div className="column">
            
            <ShowItem items={this.state.items} />
          </div>
          <div className="column">
            <AddPoints points={this.state.points} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
