import React from "react";
import '../assets/css/nav.css'
import Img from "../assets/image/giphy (1).gif";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header-area-navbar">
      <ul className="nav-links-navbar">
        <li className="center-navbar">
          <Link to="/">
            <p><img src={Img} className="srl-navbar" alt="img"></img>
                JUNKIES</p>
          </Link>
        </li>
{/* 
        <li>
          <Link to="/login">Login</Link>
        </li> */}

        {/* <li>
          <Link to="/register">Register </Link>
        </li> */}

        {/* <li>
          <Link to="/user">User </Link>
        </li> */}
        <li>
          <Link to="/add">Login </Link>
        </li>
      
      </ul>
    </nav>
  );
}

export default Navbar;
