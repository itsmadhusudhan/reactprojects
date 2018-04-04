import React from "react";
import SelectOption from "./SelectOption";
import Methods from "./Methods";

const Selection = props => {
  return (
    <div className="selection__area">
      <label htmlFor="first__item">I have an array, I would like to</label>
      <select
        value={props.value}
        id="first__item"
        name="select"
        onChange={props.handleChange}
      >
        {props.demo.map((option, index) => {
          return <SelectOption key={index} option={option} childs={true} />;
        })}
      </select>

      <br />
      {props.demo.map(
        (option, index) =>
          props.value === option.item && props.value !== "..." ? (
            <div key={index}>
              <label>{option.title}</label>
              <select
              defaultValue="..."
                value={props.selectedMethod}
                id="next__item"
                name="selectchild"
                onChange={props.handleMethodChange}
              >
                {option.methods.map((el, index) => {
                  return <SelectOption key={index} el={el} childs={false} />;
                })}
                {console.log(props.selectedMethod)}
              </select>
            </div>
          ) : (
            " "
          )
      )}
    </div>
  );
};

export default Selection;
