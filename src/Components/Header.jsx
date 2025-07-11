import React from "react";
import { NavLink } from "react-router-dom";

// HEADER COMPONENT
export default function Header({ selectedTweet }) {
  return selectedTweet ? (
    <div className="header">
      <NavLink to="/home">
        <i className="fa-solid fa-left-long"></i>
      </NavLink>
      <h3>Tweet</h3>
    </div>
  ) : (
    <div className="header">
      <h3>Home</h3>
    </div>
  );
}
