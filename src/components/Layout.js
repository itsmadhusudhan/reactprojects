import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Header from "./Header";
import Options from "./Options";
import SelectOption from "./SelectOption";

const options = Options.Options;

const Layout = () => {
  return (
    <section className="selection__area">
      <label>I have an array, I would like to</label>
      <select name="select">
        {options.map((option, index) => {
          return <SelectOption key={index} option={option} child={false} />;
        })}
      </select>
      <br />
      <label>{options[1].methods.title}</label>
      <select name="selectchild">
        {options[1].methods.child.map((option, index) => {
          return <SelectOption key={index} option={option} child={true}/>;
        })}
      </select>
    </section>
  );
};

export default Layout;
