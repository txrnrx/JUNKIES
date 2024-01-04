import React from "react";
import Img from "../assets/image/giphy (1).gif";
import "../assets/css/dashboard.css"
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <nav className="header-area-dash">
      <ul className="nav-links-dash">
        <li className="center-dash">
        </li>
        <li>
          <Link to="/user">User </Link>
        </li>
        <li>
          <Link to="/add">Login </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Dashboard;
