import React from "react";
import "./App.css";
import Show from "./Show/Show.jsx";
import tvShows from "./data.js";

const App = () => {
  /*
   * Advanced Challenge:
   * Set up Show to have a list of tvShows that you can select like in the
   * Seasons component. When you select a different show, the Show component
   */
  // Ideally this data is probably coming from a network request (aka get tvShows) or routing
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
