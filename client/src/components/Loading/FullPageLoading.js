import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import InlineLoading from "./InlineLoading";

export default (props) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-dark flex-column text-light"
      style={{ minHeight: "100vh" }}
    >
      <BounceLoader size={22} color={"#FFFFFF"} />
      <InlineLoading className="mt-2" />
    </div>
  );
};
