import React from "react";

const Skill = props => {
  return (
    <div className="skill">
      <h2 className="skill__heading">{props.skill.title}</h2>
      <p className="skill__description">{props.skill.description}</p>
    </div>
  );
};

export default Skill;
