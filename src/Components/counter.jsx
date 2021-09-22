import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        Item #{this.props.counter.id}: <span> {this.props.counter.value} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
          disabled={this.props.counter.value >= 9}
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
          disabled={this.props.counter.value === 0}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter)}
        >
          Delete
        </button>
        <button
          onClick={() => this.props.onReset(this.props.counter)}
          className="btn btn-warning btn-sm mx-2 border border-primary"
          disabled={this.props.counter.value === 0}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
