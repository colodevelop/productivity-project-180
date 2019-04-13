import React from "react";

const InputCategory = ({ value, onChange }) => {
  return (
    <div className="ui input">
      <input
        type="text"
        value={value}
        placeholder="Add category"
        onChange={onChange}
      />
    </div>
  );
};

export default InputCategory;
