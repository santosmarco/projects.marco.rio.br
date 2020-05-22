import React from "react";
import "../App.css";
import "../styles/ShowcaseSection.css";

import Loading from "../components/Loading";
import ProjectCard from "../components/ProjectCard";

class ShowcaseSection extends React.Component {
  render() {
    let projects = this.props.projects;
    return (
      <section className="bg-red text-light">
        <div className="container">
          <div
            className="row container d-block py-5"
            style={{ minHeight: "100vh" }}
          >
            <div className="row text-center mb-3">
              <div className="col">
                <h1>Showcase</h1>
                <hr className="bg-light"></hr>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <p>This is the projects I love the most</p>
              </div>
            </div>
            <div className="row">
              {projects ? (
                projects.map((project, idx) => (
                  <div className="col-12 col-lg-3">
                    <ProjectCard id={`projectShowcase-${idx}`} data={project} />
                  </div>
                ))
              ) : (
                <div className="col">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowcaseSection;
