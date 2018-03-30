import React from "react";
import ListItem from "./ListItem";

const DeletedListTab = props => {
  return (
    <div className="tab">
    <h2 className="items__heading">Deleted Items</h2>
      {props.deletedItems.length !== 0 ? (
        <ListItem
        items={props.deletedItems}
        handleDone={props.handleDone}
        handleDelete={props.handleDelete}
        do={false}
        delete={true}
      />
      ) : (
        <p>No items to display</p>
      )}
      
    </div>
  );
};

export default DeletedListTab;
