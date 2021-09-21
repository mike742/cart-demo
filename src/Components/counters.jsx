import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0, price: 15.25 },
      { id: 2, value: 1, price: 9.99 },
      { id: 3, value: 0, price: 10.45 },
      { id: 4, value: 2, price: 5.98 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters: counters });
  };

  handleDelete = (counter) => {
    const newCounters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters: newCounters });
  };
}

export default Counters;
