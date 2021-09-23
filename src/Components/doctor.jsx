import React from "react";

const Doctor = (props) => {
  return (
    <a
      onClick={() => props.onCurrentDoctor(props.doctor.name)}
      className="dropdown-item"
      id={props.doctor.id}
    >
      {props.doctor.name}
    </a>
  );
};

export default Doctor;
