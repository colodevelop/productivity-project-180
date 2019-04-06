import React from "react";

function SubmitItem(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        {/* The input takes the value, and changes the state.term on the App function. */}
        <input
          type="text"
          value={props.value}
          placeholder="Put in your work"
          onChange={props.onChange}
        />
        <select name="" id="">
          <option value="Work">Work</option>
          <option value="School">School</option>
          <option value="Fun">Fun</option>
        </select>

        <button>Complete</button>
      </form>
    </div>
  );
}

export default SubmitItem;
