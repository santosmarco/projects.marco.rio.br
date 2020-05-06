import React from "react";
import ProjectOfTheDayContainer from "../ProjectOfTheDay/POTDContainer";

export default (props) => {
  return (
    <div className="row no-gutters">
      <div className="col-7 bg-1 text-light">
        <div
          className="d-flex align-items-center justify-content-center w-75"
          style={{ minHeight: "100vh" }}
        >
          <div>
            <h1>My Projects</h1>
            <p>Here you will have access to my entire database of projects.</p>
            <button
              type="button"
              className="btn btn-primary btn-bg-0 text-dark"
            >
              Start browsing
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <ProjectOfTheDayContainer project={props.todaysProject} />
      </div>
    </div>
  );
};
