import React from "react";

import "./App.css";
import Routes from "./components/Routes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
