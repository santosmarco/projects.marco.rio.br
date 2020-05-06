import React from "react";
import {
  FaChevronDown,
  FaExternalLinkAlt,
  FaRegComments,
} from "react-icons/fa";

export default (props) => {
  const data = props.data;

  let title = data.title;
  let subtitle = data.subtitle;
  let description = data.description.split(" ").slice(0, 12).join(" ") + "...";

  return (
    <div
      className="bg-light text-dark rounded mb-2 pl-3"
      style={{ fontSize: "0.9rem", lineHeight: "1rem" }}
    >
      <div className="row align-items-center">
        <div className="col d-flex align-items-center">
          <img
            className="rounded-circle mr-3"
            src={data.thumbnail}
            alt={title}
            style={{ height: "45px", width: "45px" }}
          ></img>
          <div>
            <div className="font-weight-bold m-0">{title}</div>
            <small className="text-muted font-italic">{subtitle}</small>
          </div>
        </div>
        <div className="col-6">{description}</div>
        <div className="col-2">
          <a href={data.url}>See live</a>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <sup className="ml-1">
              <small>
                <FaExternalLinkAlt />
              </small>
            </sup>
          </a>
        </div>
        <div className="col-1 text-right">
          <button
            type="button"
            className="btn btn-light m-0"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "0 .25rem .25rem 0",
            }}
          >
            <FaChevronDown />
          </button>
          <div
            className="dropdown-menu dropdown-menu-right"
            style={{ fontSize: "0.9rem", lineHeight: "1rem" }}
          >
            <a
              className="dropdown-item"
              href={data.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="d-flex align-items-center">
                <FaRegComments />
                <div className="ml-2">Leave a feedback</div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Explore</h6>
            <a
              className="dropdown-item"
              href={data.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>
            <a
              className="dropdown-item"
              href={data.user_stories}
              target="_blank"
              rel="noopener noreferrer"
            >
              User stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
