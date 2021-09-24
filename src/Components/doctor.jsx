import React from "react";

const Doctor = (props) => {
  return (
    <a
      onClick={() => props.onCurrentDoctor(props.doctor)}
      className="dropdown-item"
      id={props.doctor.id}
    >
      {props.doctor.name}
    </a>
  );
};

export default Doctor;
