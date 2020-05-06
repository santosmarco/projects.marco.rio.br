import React from "react";
import { FaSearch } from "react-icons/fa";

export default (props) => {
  return (
    <form className={props.className}>
      <div className="row no-gutters">
        <div className="col mr-2">
          <label className="sr-only" htmlFor="searchProjectsInput">
            Search projects
          </label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="searchProjectsInput">
                <FaSearch />
              </label>
            </div>
            <input
              type="text"
              className="form-control"
              id="searchProjectsInput"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary w-100 btn-bg-1">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
