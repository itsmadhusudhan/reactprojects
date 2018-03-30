import React from "react";

class InputForm extends React.Component {
  handleSendInput = (e) => {
    e.preventDefault();
    const option = e.target.elements.todo.value.trim();
    this.props.handleInput(option);
    e.target.elements.todo.value='';    
  };
  
  render() {
    return (
      <form onSubmit={this.handleSendInput}>
        <input type="text" placeholder="Enter a todo" name="todo"/>
      </form>
    );
  }
}

export default InputForm;
