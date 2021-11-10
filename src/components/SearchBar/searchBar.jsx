import React from "react";
import "./SearchBar.css";

const searchBar = () => {
  return (
    <div>
      <div className="search_bar">
        <input
          className="search_bar_input"
          type="text"
          placeHolder="Search for a music"
        ></input>
      </div>
    </div>
  );
};

export default searchBar;
