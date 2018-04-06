import React from "react";

const Usage = props => {
  return (
    <div className="usage">
      {console.log(props.option)}
      <h2 className="usage__title">Usage</h2>
      <div className="usage__board">
        <p>let arr = [5, 1, 8];</p>
        {props.option && (
          // props.options.map((option, index) => {
          // return (
          <div>
            <p>{props.option}</p>
          </div>
        )
        // );
        })}
      </div>
    </div>
  );
};

export default Usage;
