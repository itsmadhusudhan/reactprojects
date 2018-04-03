import React from "react";

const Output = (props) => {
  return (
    <div className="output">
      <h2 className="name">{props.elm.name}</h2>
      <p className="desc">{props.elm.shortDesc}</p>
      <p className="desc">{props.elm.desc}</p>
      <p className="desc">{props.elm.example}</p>
    </div>
  );
};

export default Output;
