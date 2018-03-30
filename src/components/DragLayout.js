import React from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import ListTabs from "./ListTabs";
// import ListItem from "./ListItem";
import "../scss/style.scss";

class DragLayout extends React.Component {
  state = {
    items: [],
    done: [],
    deleted: []
  };

  handleInput = inputItem => {
    this.setState(prevState => ({
      items: prevState.items.concat({ item: inputItem, classNames: "" })
    }));
  };

  handleDone = (e, doneItem) => {
    this.setState(prevState => ({
      done: prevState.done.concat({ item: doneItem }),
      items: prevState.items.filter(el => doneItem !== el.item)
    }));
  };

  handleDelete = (e, deleteItem) => {
    e.currentTarget.parentNode.classList.add("strike");    
    this.setState(prevState => ({
      items: prevState.items.filter(el => deleteItem !== el.item),
      done: prevState.done.filter(el => deleteItem !== el.item),
      deleted: prevState.deleted.concat({ item: deleteItem })      
    }));
    console.log(e.currentTarget.parentNode.classList);
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <InputForm handleInput={this.handleInput} />
        <ListTabs
          handleDone={this.handleDone}
          handleDelete={this.handleDelete}
          items={this.state.items}
          doneItems={this.state.done}
          deletedItems={this.state.deleted}
        />
      </div>
    );
  }
}

export default DragLayout;
