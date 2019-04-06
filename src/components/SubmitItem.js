import React from "react";

function SubmitItem(props) {
  return (
    <div>
      <form>
        <input type="text" />
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
