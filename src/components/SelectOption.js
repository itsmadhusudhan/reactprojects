import React from "react";

const SelectOption = props => {
  return props.child ? (  
    <option
      disabled={props.option.item !== "..." ? "" : "disabled"}
      selected={props.option.item !== "..." ? "" : "selected"}
    >
      {props.option}
    </option>
  ) : (
    <option
      disabled={props.option.item !== "..." ? "" : "disabled"}
      selected={props.option.item !== "..." ? "" : "selected"}
    >
      {props.option.item}
    </option>
  );
};

export default SelectOption;
