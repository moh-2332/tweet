import React from "react";

import "./sidebar.css";

import SIDE_BAR_ITEMS from "../../../constants/side-bar";

const SideBar = () => {
  return (
    <div className="sidebar">
      <i className="fab fa-twitter"></i>
      {SIDE_BAR_ITEMS.map((item, index) => (
        <div key={index} className="sidebar-item">
          <span className="material-icons"> {item.icon} </span>
          <h2>{item.title}</h2>
        </div>
      ))}
      <button className="sidebar-tweet">Tweet</button>
    </div>
  );
};

export default SideBar;
