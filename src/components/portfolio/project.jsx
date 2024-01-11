
//logic for implementing projects

const projects = [
    {
      title: 'Weaher Dashboard',
      image: './images/weatherDashboard.png',
      deployLink: 'https://rg-gituser.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/RG-GitUser/Weather-Dashboard',
    },
    {
      title: 'Project 2',
      image: 'project2.png',
      deployLink: 'https://example.com/project2',
      githubLink: 'https://github.com/example/project2',
    },
   {
    title: 'Project 2',
    image: 'project2.png',
    deployLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
   {

    title: 'Project 2',
      image: 'project2.png',
      deployLink: 'https://example.com/project2',
      githubLink: 'https://github.com/example/project2',
    },

    {
    title: 'Project 2',
    image: 'project2.png',
    deployLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
  {
    title: 'Project 2',
    image: 'project2.png',
    deployLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
];
  
  const Project = () => {
    return (
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.image} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Project;