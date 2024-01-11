const Resume = () => {
    return (
      // Returning JSX elements
      <div>
        <h2>Resume</h2> 
        <a className="resumeClass" href="/resumeRiley.pdf">
          Click here to download my resume {/* Link to download the resume as a PDF */}
        </a>
        <div>
          <h2>Experience</h2> 
          <ul className="list-items">
            {/* List of Qualifications */}
            <li>
              University of New Brunswick - Full Stack Web Development Bootcamp
            </li>
            <li>CCNB - Software Testing certification</li>
          </ul>
        </div>
        <div>
        <h2>Experience</h2> {/* Experience section */}
        <ul className="list-items">
          {/* List of work experiences */}
          <li>PLATO Testing - Software Tester (Consultant)</li>
          <li>Checkout my GitHub for my current projects</li>
        </ul>
      </div>
      <div>
        <h2>Skills</h2> {/* Skills section */}
        <ul className="list-items">
          {/* List of my skills */}
          <li>HTML</li>
          <li>CSS</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume; 