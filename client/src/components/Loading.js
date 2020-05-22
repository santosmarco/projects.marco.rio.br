import React from "react";
import "../App.css";

import BounceLoader from "react-spinners/BounceLoader";

class Loading extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="mr-2">
          <BounceLoader size={22} color={"#FFFFFF"} />
        </div>
        Loading...
      </div>
    );
  }
}

export default Loading;
