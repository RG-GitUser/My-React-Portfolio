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
            <div className="myHome">
                 <Link to="/">Riley Gaffney</Link>  
            </div>

            <ul>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portoflio">Portfolio</Link>
            </ul>
        </nav>
     </div>
    );
}

export default Navbar;
