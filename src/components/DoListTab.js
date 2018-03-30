import React from "react";
import ListItem from "./ListItem";

const DoListTab = props => {
  return (
    <div className="tab">
      <h2 className="items__heading">Do Items</h2>
      {props.items.length !== 0 ? (
        <ListItem
          items={props.items}
          handleDone={props.handleDone}
          handleDelete={props.handleDelete}
          do={true}
        />
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default DoListTab;
