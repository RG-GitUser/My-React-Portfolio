// Import components and pages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/header/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

