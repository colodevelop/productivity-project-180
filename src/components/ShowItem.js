import React from "react";
import ToDoItem from "./ToDoItem";

const ShowItem = ({ items }) => {
  // Maps over the item list state, and returns a list item.
  const itemList = items.map((item, id) => {
    return <ToDoItem key={id} item={item} />;
  });

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
};

export default ShowItem;
