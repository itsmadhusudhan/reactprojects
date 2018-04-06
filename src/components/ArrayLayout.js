import React from "react";
import Header from "./Header";
import Selection from "./Selection";
import OptionSelection from "./OptionSelection";
import ArrayMethods from "./utils/ArrayMethods";
import state from "./utils/Methods";
import "../scss/style.scss";
import Usage from "./Usage";

class ArrayLayout extends React.Component {
  //initialising states states
  state = state;

  componentDidMount(){
    <Selection
    ArrayMethods={ArrayMethods}
    selectedMethods={this.state.selectedMethods}
    handleChange={this.handleChange}
  />
  }

  //to detect the change in selection input
  handleChange = e => {
    let option = "";
    // console.log(this.detectOption(e.target.value));
    this.setState({
      selectedMethods: e.target.value,
      selectedOption: this.detectOption(e.target.value),
      type: e.target.value.split(" ")[0],
      secondary: ""
    });
  };

  detectOption = value => {
    if (value === ArrayMethods.primaryOptions[0]) {
      return "adding";
    } else if (value === ArrayMethods.primaryOptions[1]) {
      return "removing";
    } else if (value === ArrayMethods.primaryOptions[4]) {
      return "string";
    } else if (value === ArrayMethods.primaryOptions[5]) {
      return "ordering";
    } else if (value === ArrayMethods.primaryOptions[6]) {
      return "other";
    } else if (value === ArrayMethods.primaryOptions[3]) {
      return "iterate";
    } else if (value === ArrayMethods.primaryOptions[2]) {
      ArrayMethods.primaryOptions[2];
      return "find";
    }
    return "iterate";
  };

  //to detect change in option selection
  handleOptionChange = e => {
    this.setState({
      secondary: e.target.value
    });
  };

  //deciding output options
  getOuputOptions = value => {
    if (Array.isArray(this.state.state[this.state.selectedOption])) {
      return (
        this.state.selectedMethods &&
        value.filter(el => el.shortDesc === this.state.secondary)[0]
      );
    }
    return;
  };

  render() {
    return (
      <div className="array__layout">
        <Header />
        <Selection
          ArrayMethods={ArrayMethods}
          selectedMethods={this.state.selectedMethods}
          handleChange={this.handleChange}
        />
        <OptionSelection
          selectedMethods={this.state.selectedMethods}
          type={this.state.type}
          handleOptionChange={this.handleOptionChange}
          options={this.state.state[this.state.selectedOption]}
          selectedOption={this.state.selectedOption}
          type={this.state.type}
          secondary={this.state.secondary}

        />
        <Usage
          option={this.getOuputOptions(
            this.state.state[this.state.selectedOption]
          )}
        />
      </div>
    );
  }
}

ArrayLayout.defaultProps={
  state:"karnataka"
}

export default ArrayLayout;
