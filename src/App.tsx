import React from "react";

import "./App.css";
import Routes from "./components/Routes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes />
    </Router>
  );
}

export default App;
