import React from "react";

const ShowItem = props => {
  // Maps over the item list state, and returns a list item.
  const items = props.items.map((item, id) => {
    return <li key={id}>{item}</li>;
  });

  return <ul>{items}</ul>;
};

export default ShowItem;
