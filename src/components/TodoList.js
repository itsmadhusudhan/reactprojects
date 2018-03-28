import React from "react";
import Item from "./Item";

const TodoList = props => {
  console.log(props.itemKey);
  return (
    <ul>
      {props.todos.map(item => {  
       return <Item item={item} key={props.itemKey} handleItemDelete={props.handleDelete} tick={props.tick}/>;
      })}
    </ul>
  );
};

export default TodoList;
