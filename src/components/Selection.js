import React from "react";
import ArrayMethods from "./utils/ArrayMethods";
import Methods from "./utils/Methods";
import SelectOption from "./SelectOption";

const Selection = props => {
  return (
    <div className="selection__layout">
      <div id="first__method">
        <label htmlFor="methodoptions">{ArrayMethods.firstMethod}</label>
        <select
          id="methodoptions"
          name="select"
          defaultValue="..."
          onChange={props.handleChange}
        >
          <option value="..." disabled>
            ...
          </option>
          {ArrayMethods.primaryOptions.map((option, index) => {
            return <SelectOption key={index} option={option} />;
          })}
        </select>
      </div>

      <div id="option__method">
        <label>{ArrayMethods.methodOptions}</label>

        {console.log(props.primaryOption)}
        <select defaultValue="...">
          <option value="..." disabled>
            ...
          </option>
          <option>world</option>
        </select>
      </div>
    </div>
  );
};

export default Selection;
