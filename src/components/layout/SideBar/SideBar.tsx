import React from "react";

import { Link, NavLink } from "react-router-dom";

import "./sidebar.css";

import SIDE_BAR_ITEMS from "../../../constants/side-bar";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <i className="fab fa-twitter"></i>
      </Link>

      {SIDE_BAR_ITEMS.map((item, index) => (
        <NavLink key={index} to={item.to} className="sidebar-item">
          <span className="material-icons"> {item.icon} </span>
          <h2>{item.title}</h2>
        </NavLink>
      ))}
      <button className="sidebar-tweet">Tweet</button>
    </div>
  );
};

export default SideBar;
