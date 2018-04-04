import React from "react";
import Header from "./Header";
import Selection from "./Selection";
import state from "./utils/Methods";
import "../scss/style.scss";

class ArrayLayout extends React.Component {
  //initialising states states
  state = state

  //to detect the change in selection input
  handleChange = e => {
    this.setState({
      selectedMethods: e.target.value
    });

  };

  //to detect change in option selection
  handleOptionChange = e => {
    // this.setState({
    //   selectedOption: ""
    // });
  };

  render() {
    return (
      <div className="array__layout">
        <Header />
        <Selection
          primaryOption={this.state.selectedMethods}
          type={this.state.type}
          handleChange={this.handleChange}
          handleOptionChange={this.handleOptionChange}
        />
      </div>
    );
  }
}

export default ArrayLayout;
