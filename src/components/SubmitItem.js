import React from "react";
import InputCalcPoints from "./InputCalcPoints";
import InputCategory from "./InputCategory";
// import ShowItem from "./ShowItem";

class SubmitItem extends React.Component {
  state = {
    term: "",
    items: ["Work", "Study", "Learning"]
  };

  /******* =======================
============ MAIN FUNCTIONS ===============
===========================**********/

  // gets the add points function from the child component
  addPointsFunc = () => {
    this.refs.child.addPointsFunc();
  };

  // Changes the term value when the input on submitItem is changed.
  createCategory = event => {
    const { value } = event.target;

    this.setState({ term: value });
  };

  // Function for SubmitItem, adds the new term to items, and refreshes the term to empty string.
  onSubmit = e => {
    e.preventDefault();

    this.setState({ term: "", items: [...this.state.items, this.state.term] });
    this.addPointsFunc();
  };

  render() {
    const { value, selectValue, toDoValue } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="input-form">
          {/* The input takes the value, and changes the state.term on the App function. */}

          <InputCategory onChange={this.createCategory} value={value} />

          <div className="select-button">
            <InputCalcPoints
              ref="child"
              selectValue={selectValue}
              toDoValue={toDoValue}
              items={this.state.items}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SubmitItem;
