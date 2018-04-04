import React from "react";

const SelectOption = props => {
  return props.childs ? (
    <option disabled={props.option.item !== "..." ? "" : "disabled"}>
      {props.option.item}
    </option>
  ) : (
    <option disabled={props.el.shortDesc !== "..." ? "" : "disabled"}>
      {props.el.shortDesc}
    </option>
  );
};

export default SelectOption;
