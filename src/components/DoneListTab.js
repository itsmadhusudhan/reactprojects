import React from "react";
import ListItem from "./ListItem";

const DoneListTab = props => {
  return (
    <div className="tab">
      <h2 className="items__heading">Done Items</h2>
      {props.doneItems.length !== 0 ? (
        <ListItem
          items={props.doneItems}
          handleDelete={props.handleDelete}
          do={false}
        />
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default DoneListTab;
