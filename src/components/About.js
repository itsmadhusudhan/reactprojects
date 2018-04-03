import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About page</h2>
      <NavLink exact={true} activeClassName="is-active" to="/about/me">
        About me
      </NavLink>
    </div>
  );
};

export default About;
