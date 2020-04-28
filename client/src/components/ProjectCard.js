import React from "react";
import "../App.css";

import $ from "jquery";

class ProjectCard extends React.Component {
  fixDescriptionHeights(maxLines) {
    let $d = $(`#${this.props.id} .card-text`);
    let lineHeight = $d.css("line-height");
    lineHeight = parseFloat(lineHeight.slice(0, lineHeight.length - 2));

    let maxHeight = lineHeight * maxLines;
    // let minWords = maxLines * 3;

    let $dHeight = $d.outerHeight();

    if ($dHeight > maxHeight) {
      // TO-DO
    } else {
      while ($dHeight < maxHeight) {
        $d.html($d.html() + "<br />");
        $dHeight = $d.outerHeight();
      }
    }
  }
  componentDidMount() {
    this.fixDescriptionHeights(5);
  }
  render() {
    let p = this.props.data;
    return (
      <div
        id={this.props.id}
        className="card text-dark"
        style={{ fontSize: "0.9rem" }}
      >
        <a href={p.url} target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src={p.thumbnail} alt={p.title} />
        </a>
        <div className="card-body p-3">
          <div className="mb-3">
            <h5 className="card-title mb-1">{p.title}</h5>
            <h6 className="card-subtitle text-muted font-italic">
              <small>{p.subtitle}</small>
            </h6>
          </div>
          <div className="card-text text-left">{p.description}</div>
          <div className="mt-4">
            <a
              className="mr-2"
              href={p.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            <a href={p.user_stories} target="_blank" rel="noopener noreferrer">
              User stories
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
