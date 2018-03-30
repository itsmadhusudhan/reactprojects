import React from "react";
import Item from "./Item";

const ListItem = props => {
  return (
    <div className="dd-listitem">
      {props.items.map(item => {
        return (
          <Item
            key={item.item}
            item={item.item}
            handleDone={props.handleDone}
            handleDelete={props.handleDelete}
            do={props.do}
            delete={props.delete}
          />
        );
      })}
    </div>
  );
};

export default ListItem;
