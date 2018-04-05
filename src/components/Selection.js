import React from "react"
import Methods from "./utils/Methods";
import SelectOption from "./SelectOption";

const Selection = props => {
  return (
    <div className="selection__layout">
      <div id="first__method">
        <label htmlFor="methodoptions">{props.ArrayMethods.firstMethod}</label>
        <select
          id="methodoptions"
          name="select"
          defaultValue="..."
          onChange={props.handleChange}
        >
          <option value="..." disabled>
            ...
          </option>
          {props.ArrayMethods.primaryOptions.map((option, index) => {
            return <SelectOption key={index} option={option} />;
          })}
          
        </select>
      </div>
    </div>
  );
};

export default Selection;
