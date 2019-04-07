import React from "react";

function SubmitItem({ onSubmit, value, onChange, selectValue, toDoValue }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* The input takes the value, and changes the state.term on the App function. */}
        <div className="ui fluid input">
          <input
            type="text"
            value={value}
            placeholder="Put in your work"
            onChange={onChange}
          />
        </div>

        <div className="select-button">
          <select
            className="ui dropdown"
            value={toDoValue}
            onChange={selectValue}
          >
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Fun">Fun</option>
            <option value="Series">Series</option>
          </select>
          <button className="ui button complete-button">Complete</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitItem;
