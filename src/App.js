import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StarshipPage from "./components/StarshipPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={StarshipPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
