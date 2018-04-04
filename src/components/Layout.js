import React from "react";
import Header from "./Header";
import Options from "./Options";
import Selection from "./Selection";
import Usage from "./Usage";
import Demo from "./Demo";
import Output from "./Output";

const options = Options.Options;
const demo = Demo.Demo;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "...",
      selectedMethod: "...",
      methods: {
        name: "",
        shortDesc: "",
        desc: "",
        example: ""
      }
    };
  }
  handleChange = event => {
    this.setState({
      value: event.target.value,
      selectedMethod: "..."
    });
  };

  handleMethodChange = event => {
    const method = document.getElementById("next__item");
    this.setState(() => ({
      selectedMethod: method.value
    }));
    // console.log(this.state.methods);
    // this.handleMethodState();
  };

  handleMethodState = () => {
    // demo.map(el => {
    //   return el.methods.map((elm, index) => {
    //     if (
    //       this.state.selectedMethod === elm.shortDesc &&
    //       this.state.selectedMethod !== "..."
    //     ) {
    //       return this.setState(() => ({
    //         methods: {
    //           name: elm.name,
    //           shortDesc: elm.shortDesc,
    //           desc: elm.desc,
    //           example: elm.example
    //         }
    //       }));
    //     }
    //   });
    // });
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
        <Output
          elm={this.state.methods}
          selectedMethod={this.state.selectedMethod}
        />
      </section>
    );
  }
}

export default Layout;
