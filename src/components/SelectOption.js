import React from "react";

const SelectOption = (props) => {
  return props.childs ? (
    <option disabled={props.el !== "..." ? "" : "disabled"}>
      {props.el}
    </option>
  ) : (
    <option disabled={props.option.item !== "..." ? "" : "disabled"}>
      {props.option.item}
    </option>
  );
};

export default SelectOption;
