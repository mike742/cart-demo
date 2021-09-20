import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        Item : <span> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-primary btn-sm m-2"
          disabled={this.state.count === 0}
        >
          -
        </button>
      </React.Fragment>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this.state.count);
  // }

  handleIncrement = () => {
    this.setState({ count: ++this.state.count });
  };
  handleDecrement = () => {
    this.setState({ count: --this.state.count });
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "0" : count;
  }
}

export default Counter;
