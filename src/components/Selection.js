import React from "react";
import SelectOption from "./SelectOption";
import Methods from "./Methods";
import Demo from "./Demo";
import Output from "./Output";

const demo = Demo.Demo;

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
        {props.options.map((option, index) => {
          return <SelectOption key={index} option={option} childs={false} />;
        })}
      </select>

      <br />
      {props.options.map(
        (option, index) =>
          props.value === option.item && props.value !== "..." ? (
            <div key={index}>
              <label>{option.title}</label>
              <select
                value={props.selectedMethod}
                id="next__item"
                name="selectchild"
                onChange={props.handleMethodChange}
              >
                {option.methods.child.map((el, index) => {
                  return <SelectOption key={index} el={el} childs={true} />;
                })}
              </select>
            </div>
          ) : (
            " "
          )
      )}

      {
        demo.map(el=>{
          return(
            el.methods.map((elm,index)=>{
              return props.selectedMethod===elm.shortDesc && props.selectedMethod!=="..."?<Output key={index} elm={elm}/>:""
            })
          )
        })
      }
    </div>
  );
};

export default Selection;
