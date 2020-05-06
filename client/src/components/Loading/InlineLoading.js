import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default (props) => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center align-items-baseline ${props.className}`}
    >
      <div>Loading</div>
      <PulseLoader
        size={props.size || 2}
        color={props.color || "#FFFFFF"}
        margin={props.margin || 1}
      />
    </div>
  );
};
