
//logic for implementing projects

import PropTypes from 'prop-types';
import './portfolio.css';

const Project = ({ title, image, deployLink, githubLink }) => {
  return (
    <div className="project-item">
      <img src={image} alt={title} />
      <div className="project-details">
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            Deployed App
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;