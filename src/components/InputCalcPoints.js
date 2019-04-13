import React, { Component } from "react";
import TimeInput from "./TimeInput";
import AddPoints from "./AddPoints";
import BoxPoints from "./BoxPoints";

class InputCalcPoints extends Component {
  state = {
    toDoValue: "Work",
    points: null,
    boxes: [],
    size: ""
  };

  /******* =======================
============ ADD POINTS FUNCTION ===============
===========================**********/

  // Add points depending on how hard the task was.
  addPointsFunc = () => {
    const toDoValue = this.state.toDoValue;

    // // Looks at what kind of value is chosen 'Work' or 'school' etc. And calculates how many points he can get.
    // // The harder the task was, the more points you will get.
    this.setState(prevState => {
      if (toDoValue === "Work") {
        return {
          points: prevState.points + 1,
          boxes: [
            ...prevState.boxes,
            <BoxPoints key={this.state.boxes.value} type="work" />
          ]
        };
      } else if (toDoValue === "Study") {
        return {
          points: prevState.points + 2,
          boxes: [
            ...prevState.boxes,
            <BoxPoints key={this.state.boxes.value} type="study" />
          ]
        };
      } else if (toDoValue === "Learning") {
        return {
          points: prevState.points + 4,
          boxes: [
            ...prevState.boxes,
            <BoxPoints key={this.state.boxes.value} type="learning" />
          ]
        };
      }
    });

    console.log(this.state.toDoValue);
  };

  //Selects the value to understand what kind of task it was.
  selectValue = e => {
    const { value } = e.target;
    this.setState({ toDoValue: value }, () => {
      console.log(this.state.toDoValue);
    });
  };

  render() {
    const { toDoValue } = this.state;
    const { items } = this.props;

    return (
      <div>
        {" "}
        <div>
          <TimeInput className="timeInput" value="12:00" onChange={() => {}} />

          <select
            className="ui dropdown"
            defaultValue={toDoValue}
            onChange={this.selectValue}
          >
            {/* Create an option in the input select, depening on what the user puts as input
          Maps over the array, and creates individual items */}
            {items.map((item, id) => (
              <option key={id} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button className="ui button complete-button">Complete</button>
        </div>
        <AddPoints points={this.state.points} />
        {this.state.boxes}
      </div>
    );
  }
}

export default InputCalcPoints;
