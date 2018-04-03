import React from "react";
import { NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div>
      <h1>Headers </h1>
      <nav>
        <NavLink exact={true} activeClassName="is-active" to="/">
          Dashboard
        </NavLink>
        <NavLink exact={true} activeClassName="is-active" to="/about">
          About
        </NavLink>
        <NavLink exact={true} activeClassName="is-active" to="/small">
          SmallFunction
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
