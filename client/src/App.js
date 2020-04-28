import React from "react";
import "./App.css";

import Header from "./components/Header";

import WelcomeSection from "./sections/WelcomeSection";
import ShowcaseSection from "./sections/ShowcaseSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "mounting",
    };

    this.setStatus = this.setStatus.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.fetchDB = this.fetchDB.bind(this);
  }
  setStatus(newStatus) {
    if (this.state.status !== newStatus) {
      this.setState((state) => ({
        status: newStatus,
      }));
    }
  }
  fetchAPI(endpoint) {
    this.setStatus("fetching");
    return fetch(`/api/${endpoint}`).then((res) => res.json());
  }
  fetchDB(actions) {
    const fetchTotal = actions.length;
    let fetchCompleted = 0;

    for (let i = 0; i < fetchTotal; i++) {
      this.fetchAPI(actions[i].endpoint).then((res) => {
        let newState = {};
        newState[actions[i].stateKey] = res;

        this.setState((state) => newState);

        fetchCompleted++;

        if (fetchCompleted === fetchTotal) {
          this.setStatus("ready");
        }
      });
    }
  }
  componentDidMount() {
    this.fetchDB([
      { endpoint: "projects", stateKey: "projects" },
      { endpoint: "skills", stateKey: "skills" },
    ]);
    console.log(this.state);
  }
  render() {
    console.log(this.state);
    return (
      <div className="bg-dark">
        <Header />
        <WelcomeSection />
        <ShowcaseSection
          projects={
            this.state.projects
              ? this.state.projects.filter((project) => project.showcase)
              : null
          }
        />
      </div>
    );
  }
}

export default App;
