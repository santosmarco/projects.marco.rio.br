import React from "react";
import moment from "moment";
import { FaRegComments } from "react-icons/fa";
import ProjectOfTheDayCard from "./POTDCard";

export default (props) => {
  return (
    <div className="bg-0 text-dark">
      <div
        className="d-flex align-items-start justify-content-center w-75 mx-auto flex-column"
        style={{ minHeight: "100vh" }}
      >
        <h1>Project of the day</h1>
        <p>
          Today is <em>{moment().format("dddd, MMMM Do YYYY")}</em>*
        </p>
        <div className="mt-4 w-100">
          <ProjectOfTheDayCard project={props.project} />
          <button type="button" className="btn btn-primary btn-bg-1 w-100 mt-2">
            <div className="d-flex align-items-center justify-content-center">
              <FaRegComments />
              <div className="ml-2">Leave a feedback</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
