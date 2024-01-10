//Importing react to create function for Navbar 

import React from 'react';
import { Link } from "react-router-dom"; 
import "./styles/index.css";


function Navbar() {
    return (
    <div className="navbar">
        <div className="togglebutton">
            <button> </button>
            </div>
        <nav>
            <ul>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
                <Link to="/">Home</Link>
                <Link to="/portoflio">Portfolio</Link>
            </ul>
        </nav>
     </div>
    );
}

export default Navbar;
