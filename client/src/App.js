import React, { useState, useEffect } from "react";
import "./App.css";

import FullPageLoading from "./components/Loading/FullPageLoading";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import ProjectsContainer from "./Projects/ProjectsContainer";

function App() {
  const [status, setStatus] = useState("mounting"); // mounting, fetching, ready
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    setStatus("fetching");
    let res = await fetch(`/api/projects`);
    let data = await res.json();
    setProjects(data);
    setStatus("ready");
  };

  useEffect(() => {
    loadProjects();
  }, []);

  if (status === "mounting" || status === "fetching") {
    return <FullPageLoading />;
  } else {
    return (
      <div>
        <WelcomeSection todaysProject={projects[0]} />
        <div className="bg-2 text-light">
          <div className="container">
            <ProjectsContainer projects={projects} perPage={2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
