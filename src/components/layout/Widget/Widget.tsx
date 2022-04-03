import React from "react";

import "./widget.css";

const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <span className="material-icons widgets-search"> search </span>
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets-container">
        <h2>What's happening?</h2>
      </div>
    </div>
  );
};

export default Widget;
