import React from "react";

import "./App.css";
import Routes from "./components/Routes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'

import configureStore from "./data/store/configureStore";

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
