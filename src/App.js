import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Counters from "./Components/counters";
import Navbar from "./Components/navbar";
import React, { Component } from "react";
import Doctors from "./Components/doctors";
import axios from "axios";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 1, price: 15.25 },
      { id: 2, value: 1, price: 9.99 },
      { id: 3, value: 0, price: 10.45 },
      { id: 4, value: 2, price: 5.98 },
    ],
    doctors: [],
    currentDoctor: { id: 0, name: "" },
  };

  componentDidMount() {
    axios.get("http://localhost:3001/doctors").then((res, err) => {
      //console.log(res.data);
      this.setState({ doctors: res.data });
    });
  }

  handleCurrentDoctor = (smth) => {
    console.log(smth);
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = 0;
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const id = counters[counters.length - 1].id + 1;
    counters.push({ id: id, value: 0, price: 0 });
    this.setState({ counters });
  };

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

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalNumber={this.state.counters.filter((c) => c.value != 0).length}
        />
        <div className="container">
          Current doctor: <p>{this.state.currentDoctor.name}</p>
          <Doctors
            doctors={this.state.doctors}
            onCurrentDoctor={this.handleCurrentDoctor}
          />
          {/* <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          onResetAll={this.handleResetAll}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
