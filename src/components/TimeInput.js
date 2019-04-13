import React from "react";
import TimeField from "react-simple-timefield";
import "../css/app.css";

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      time: "12:34"
    };

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(time) {
    this.setState({ time });
  }

  render() {
    const { time } = this.state;

    return <TimeField value={time} onChange={this.onTimeChange} />;
  }
}

export default TimeField;
