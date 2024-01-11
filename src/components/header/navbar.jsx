//Importing react to create function for Navbar 

// import React from 'react';
import { Link } from "react-router-dom"; 



function Navbar() {
    return (
    <div className="navbar">
        <div className="togglebutton">
            <button> </button>
            </div>
        <nav>
            <div className="myHome">Riley Gaffney</div>

            <ul>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            </ul>
        </nav>
     </div>
    );
}

export default Navbar;
