import React from "react";
import "./App.css";

import Header from "./components/Header";

import WelcomeSection from "./sections/WelcomeSection";

class App extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <div className="container">
          <WelcomeSection />
        </div>
      </div>
    );
  }
}

export default App;
