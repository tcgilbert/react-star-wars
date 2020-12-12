import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StarshipPage from "./components/StarshipPage";
import "./App.css";
import Axios from "axios";

function App() {

  const [starships, setStarships] = useState([]);


  useEffect(() => {
    console.log("hi from use effect");

    Axios.get(`https://swapi.dev/api/starships/`)
    .then((res) => {
      let starshipArray = res.data.results;
      setStarships(starshipArray);
    })
    .catch((err) => console.log(err));
  }, [])



  return (
    <BrowserRouter>
      <div className="App">
        <Route 
        exact 
        path="/" 
        render={() => <StarshipPage starships={starships} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
