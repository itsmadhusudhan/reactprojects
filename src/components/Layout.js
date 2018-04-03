import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";

const skilldata = [
  {
    title: "Human Readable code",
    description: "I code for humans. I like to write comments where necessary."
  },
  {
    title: "Structured and clean HTML5",
    description: "I write structured html following the modern web standards"
  },
  {
    title: "Modular CSS3",
    description: "I just love CSS. Especially CSS animations are just cool..."
  },
  {
    title: "Functional Javascript",
    description:
      "I find I have more freedom when writing Javascript because it don't impose a style. ES6 has added more power to the web with new features."
  },
  {
    title: "Magical React js",
    description:
      "Components are the powerhouses of React js. it has redefined the way we see web applications"
  },
  {
    title: "Maintaining versions",
    description: "I use git for this."
  }
];

const Layout = () => {
  return (
    <section id="my-skills">
      <h2 className="heading">I'm Good at</h2>
      <div className="skills">
        {skilldata.map((skill, index) => <Skill skill={skill} key={index} />)}
      </div>
    </section>
  );
};

export default Layout;
