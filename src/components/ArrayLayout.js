import React from "react";
import Header from "./Header";
import Selection from "./Selection";
import OptionSelection from "./OptionSelection";
import ArrayMethods from "./utils/ArrayMethods";
import state from "./utils/Methods";
import "../scss/style.scss";

class ArrayLayout extends React.Component {
  //initialising states states
  state = state;

  //to detect the change in selection input
  handleChange = e => {
    let option = "";
    if (e.target.value === ArrayMethods.primaryOptions[0]) {
      option = "adding";
    } else if (e.target.value === ArrayMethods.primaryOptions[1]) {
      option = "removing";
    } else if (e.target.value === ArrayMethods.primaryOptions[4]) {
      option = "string";
    } else if (e.target.value === ArrayMethods.primaryOptions[5]) {
      option = "ordering";
    } else if (e.target.value === ArrayMethods.primaryOptions[6]) {
      option = "other";
    } else if (e.target.value === ArrayMethods.primaryOptions[3]) {
      option = "iterate";
    } else if (e.target.value === ArrayMethods.primaryOptions[2]) {
      ArrayMethods.primaryOptions[2];
      option = "find";
    }
    this.setState({
      selectedMethods: e.target.value,
      selectedOption: option,
      type: e.target.value.split(" ")[0],
      secondary:''
    });
  };

  //to detect change in option selection
  handleOptionChange = e => {
    this.setState({
      secondary: e.target.value
    });
  };

  render() {
    return (
      <div className="array__layout">
        <Header />
        <Selection
          ArrayMethods={ArrayMethods}
          primaryOption={this.state.selectedMethods}
          handleChange={this.handleChange}
        />
        <OptionSelection
          primaryOption={this.state.selectedMethods}
          type={this.state.type}
          handleOptionChange={this.handleOptionChange}
          options={this.state.state[this.state.selectedOption]}
          selectedOption={this.state.selectedOption}
          type={this.state.type}
          secondary={this.state.secondary}
        />
       
      </div>
    );
  }
}

export default ArrayLayout;
