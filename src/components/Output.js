import React from "react";
import Demo from "./Demo";

const demo = Demo.Demo;

const Output = props => {
  return (
    <div className="output">
      {demo.map(el => {
        return el.methods.map((elm, index) => {
          if (
            props.selectedMethod === elm.shortDesc &&
            props.selectedMethod !== "..."
          ) {
            return (  
              <div>
                <h2 className="name">{elm.name}</h2>
                <p className="desc">{elm.desc}</p>
              </div>
            );
          }
        });
      })}
    </div>
  );
};

export default Output;
