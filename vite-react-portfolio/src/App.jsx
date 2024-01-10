// Import components and pages

import React from "react";
import Navbar from '../components/Navbar';

import About from '../pages/About';
import Contact from '../pages/Contact'; 
import Portfolio from '../pages/Portfolio';

//Function for routing pages
function App() {
    return ( 
        <div className="App"> 
            <Router>
                <Navbar />  
                <Routes>
                 <Route path="../about" element={<About />} /> 
                 <Route path="../contact" element={<Contact />} />  
                 <Route path="../portfolio" element={<Portfolio/>} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;
