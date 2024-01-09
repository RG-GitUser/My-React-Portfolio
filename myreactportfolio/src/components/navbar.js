//Importing react to create function for Navbar 

import React from 'react';
import { link } from "react-router-dom"; 
import "../styles/index.css";


function Navbar() {
    return (
    <div className="navbar">
        <div className="togglebutton">
            <button> </button>
            </div>
        <nav>
            <ul>
                <link to="/about">About</link>
                <link to="/contact">Contact</link>
                <link to="/">Home</link>
                <link to="/portoflio">Portfolio</link>
            </ul>
        </nav>
     </div>
    );
}

export default Navbar;
