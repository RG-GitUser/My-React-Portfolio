import "./portfolio.css";
import Project from './project';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        <Project />
      </div>
    </section>
  );
};

export default Portfolio;