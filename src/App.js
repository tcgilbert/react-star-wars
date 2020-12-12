import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/Nav";
import StarshipPage from "./components/StarshipPage";
import StarshipInfo from "./components/StarshipInfo";
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
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route
          exact
          path="/"
          render={() => <StarshipPage starships={starships} />}
        />

        <Route
          path="/starships/:id"
          // ask how you could figure out where the params come from
          render={(rProps) => {
            const id = rProps.match.params.id;
            const shipInfo = starships[id];
            return <StarshipInfo shipInfo={shipInfo} />;
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
