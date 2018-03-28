import React from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import TodoList from "./TodoList";
import "../scss/style.scss";

class TodoLayout extends React.Component {
  state = {
    todos: [],
    itemKey: 0,
    date: new Date()
  };

  componentDidMount() {
    // this.timerID = setInterval(() => this.tick(), 1000);
  }

  handleInput = item => {
    // console.log(this.state);
    this.setState(prevState => ({
      todos: prevState.todos.concat(item)
      // itemKey:prevState.itemKey+1
    }));
  };

  handleItemDelete = itemToRemove => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => itemToRemove !== item)
    }));
  };

  // tick = () => {
  //   this.setState({
  //     date: new Date()
  //   });
  // };

  render() {
    return (
      <div className="container">
        <Header />
        <InputForm handleInput={this.handleInput} />
        <TodoList
          todos={this.state.todos}
          itemKey={this.state.itemKey}
          handleDelete={this.handleItemDelete}
        />
        {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}
      </div>
    );
  }
}

export default TodoLayout;
