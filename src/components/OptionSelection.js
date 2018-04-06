import React from "react";
import ArrayMethods from "./utils/ArrayMethods";
import Methods from "./utils/Methods";
import SelectOption from "./SelectOption";

const Selection = props => {
  return (
    <div className="selection__layout">
      {ArrayMethods.primaryOptions.map(option => {
        return option === props.selectedMethods ? (
          <div id="option__method">
          {
          // console.log(props)
            
          }
            <label>
              {props.type === "find"
                ? ArrayMethods.findMethod
                : ArrayMethods.methodOptions + " " + props.type}
            </label>
            {props.type !== "find" ? (
              <select defaultValue="..."onChange={props.handleOptionChange}>
                <option value="..." disabled>
                  ...
                </option>
                {props.options.map((opt, index) => {
                  return <SelectOption key={index} option={opt.shortDesc} />;
                })}
              </select>
            ) : (
              <select defaultValue="..." onChange={props.handleOptionChange}>
                <option value="..." disabled>
                  ...
                </option>
                <SelectOption option={ArrayMethods.singleItem} />
                <SelectOption option={ArrayMethods.manyItems} />
              </select>
            )}
          </div>
        ) : (
          false
        );
      })}
      {props.secondary === "one item" ||
      props.secondary === "one or many items" ? (
        <div>
          <label>
            {ArrayMethods.methodOptions} {console.log(props.secondary)}{" "}
          </label>
          <select>
            <SelectOption option={ArrayMethods.singleItem} />
          </select>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Selection;
