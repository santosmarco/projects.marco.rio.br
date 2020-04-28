import React from "react";
import "../styles/WelcomeSection.css";

import { FaChevronDown } from "react-icons/fa";

class WelcomeSection extends React.Component {
  render() {
    return (
      <div
        className="pt-5 pb-3 text-light d-flex justify-content-between flex-column"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <h1>My projects</h1>
          <p>Here you can access all my projects.</p>
        </div>
        <button
          type="btn"
          className="bounce btn btn-link text-light mx-auto"
          style={{ fontSize: "3rem" }}
        >
          <FaChevronDown />
        </button>
      </div>
    );
  }
}

export default WelcomeSection;
