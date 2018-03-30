import React from "react";

class Item extends React.Component {
  handleItemDone = e => {
    this.props.handleDone(e, this.props.item);
  };

  handleItemDelete = e => {
    this.props.handleDelete(e, this.props.item);
  };

  render() {
    return (
      <div
        className="dd-item"
        onDrop={event => {
          // event.preventDefault();
          // var data = event.dataTransfer.getData("Text");
          // console.log(data);
        }}
      >
        <li
          draggable="true"
          onDragStart={e => {
            // this.dragged = e.currentTarget;
            // e.dataTransfer.effectAllowed = "move";
            // e.dataTransfer.setData("text/html", this.dragged);
            // console.log("dragged");
            // console.log(this.props.handleColor);
          }}
          onDragEnd={e => {
            // console.log("drag ended");
          }}
        >
          {this.props.delete ? null : (
            <i className="fa fa-align-justify" aria-hidden="true" />
          )}
          {this.props.item}
        </li>
        {this.props.delete ? null : (
          <li onClick={this.handleItemDelete}>
            <i className="fa fa-trash delete" aria-hidden="true" />
          </li>
        )}
        {this.props.do ? (
          <li onClick={this.handleItemDone}>
            <i className="fa fa-check done" aria-hidden="true" />
          </li>
        ) : null}
      </div>
    );
  }
}

export default Item;
