import React from "react";
import ListItem from "./listItem";
import "./List.css";

const list = () => {
  return (
    <div className="list">
      <div className="list_item">
        <ListItem />
        {/* //what to map through my list items */}
      </div>
    </div>
  );
};

export default list;
