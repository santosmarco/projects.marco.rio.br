import React from "react";

export default (props) => {
  return (
    <div
      className={`col${props.span ? "-" + props.span : ""} ${
        props.className || ""
      }`}
    >
      {props.children}
    </div>
  );
};
