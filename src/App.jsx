import "./App.css";
import React from "react";
import Show from "./Show/Show.jsx";
import tvShows from "./data.js";

const App = () => {
  const currentShow = tvShows[0];

  return (
    <>
      <Show
        name={currentShow.name}
        userRating={currentShow.userRating}
        synopsis={currentShow.synopsis}
        seasons={currentShow.seasons}
      />
    </>
  );
}

export default App;
