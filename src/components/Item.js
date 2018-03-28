import React from "react";

const Item = props => {
  return (
    <div>
      <li className="todo__item">{props.item}</li>
      <button
        onClick={e => {
          props.handleItemDelete(props.item);
        }}
      >
        Delete
      </button>
      
    </div>
  );
};

export default Item;
