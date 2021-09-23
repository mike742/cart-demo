import React, { Component } from "react";
import Doctor from "./doctor";

class Doctors extends Component {
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
            {this.props.doctors.map((d) => (
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
