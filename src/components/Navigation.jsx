import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {

  return (
    <div className="navigation">
      <nav className="nav_background navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            The <b>Tech</b>mas Quiz
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                <i class="fas fa-house"></i>  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/game">
                <i class="fa-solid fa-gamepad"></i> Game
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                <i class="fa-solid fa-circle-info"></i> About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;