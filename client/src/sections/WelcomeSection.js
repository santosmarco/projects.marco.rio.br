import React from "react";
import "../App.css";
import "../styles/WelcomeSection.css";

import { FaChevronDown } from "react-icons/fa";

class WelcomeSection extends React.Component {
  render() {
    return (
      <section className="bg-blue text-light">
        <div className="container">
          <div
            className="row align-items-start pt-5"
            style={{ minHeight: "50vh" }}
          >
            <div className="col">
              <h1>My projects</h1>
              <p>Here you can access all my projects.</p>
            </div>
          </div>
          <div
            className="row align-items-end pb-3 text-center"
            style={{ minHeight: "50vh" }}
          >
            <div className="col">
              <button
                type="btn"
                className="bounce btn btn-link text-light mx-auto"
                style={{ fontSize: "3rem" }}
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WelcomeSection;
