import React, { Component } from "react";
import axios from "axios";

class Patient extends Component {
  // ui
  handleBlur = (healthNumber) => {
    //console.log(healthNumber);

    axios
      .get("http://localhost:3001/patients/" + healthNumber)
      .then((res, err) => {
        console.log(res);
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                onBlur={(e) => this.handleBlur(e.target.value)}
                type="number"
                className="form-control"
                id="healthNumber"
                placeholder="Enter a Health Number"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <input type="date" className="form-control" id="dob" />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Patient;
