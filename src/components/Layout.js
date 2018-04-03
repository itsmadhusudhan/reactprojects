import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Header from "./Header";
import Options from "./Options";
import Selection from "./Selection";
import Usage from "./Usage";

const options = Options.Options;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "...",
      selectedMethod: "..."
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleMethodChange = event => {
    const method=document.getElementById("next__item");
    this.setState(() => ({
      selectedMethod: method.value
    }));
  };

  render() {
    return (
      <section className="array__area">
        <Selection
          options={options}
          value={this.state.value}
          handleChange={this.handleChange}
          selectedMethod={this.state.selectedMethod}
          handleMethodChange={this.handleMethodChange}
        />
        <Usage />
      </section>
    );
  }
}

export default Layout;
