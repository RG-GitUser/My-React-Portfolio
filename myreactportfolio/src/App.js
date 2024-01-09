// Import components and pages

import React from "react";
import Navbar from './src/components/navbar'; 
import Header from './src/components/header'; 
import Footer from './src/components/footer';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Portfolio from './src/pages/Portfolio';

//Component functions 
function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Home />
            <About />
            <Contact />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
