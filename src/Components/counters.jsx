import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAdd}
          className="btn btn-success btn-sm mx-2 my-3"
        >
          Add Item
        </button>
        <button
          onClick={this.props.onResetAll}
          className="btn btn-warning btn-sm mx-2 my-3"
        >
          Reset All Items
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
