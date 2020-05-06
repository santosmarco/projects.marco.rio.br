import React from "react";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";

export default (props) => {
  return (
    <div className="bg-light text-dark rounded shadow">
      <img
        className="w-100"
        src={props.project.thumbnail}
        alt={props.project.title}
        style={{ borderRadius: ".25rem .25rem 0 0" }}
      ></img>
      <div className="px-4 py-4">
        <div className="mb-4">
          <h5 className="m-0">{props.project.title}</h5>
          <small>
            <p className="font-italic text-muted m-0">
              {props.project.subtitle}
            </p>
          </small>
        </div>
        <p>{props.project.description}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <a href={props.project.url}>See live</a>
            <a
              href={props.project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <sup className="ml-1">
                <small>
                  <FaExternalLinkAlt />
                </small>
              </sup>
            </a>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light m-0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaChevronDown />
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              style={{ fontSize: "0.9rem", lineHeight: "1rem" }}
            >
              <h6 className="dropdown-header">Explore</h6>
              <a
                className="dropdown-item"
                href={props.project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
              <a
                className="dropdown-item"
                href={props.project.user_stories}
                target="_blank"
                rel="noopener noreferrer"
              >
                User stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
