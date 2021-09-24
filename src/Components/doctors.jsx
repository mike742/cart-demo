import React, { Component } from "react";
import Doctor from "./doctor";
import axios from "axios";

class Doctors extends Component {
  state = {
    doctors: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/doctors").then((res, err) => {
      this.setState({ doctors: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="dropdown my-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Doctors
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.doctors.map((d) => (
              <Doctor
                onCurrentDoctor={this.props.onCurrentDoctor}
                key={d.id}
                doctor={d}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Doctors;
