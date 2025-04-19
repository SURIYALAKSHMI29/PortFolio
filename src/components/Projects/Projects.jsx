import React, { useState, useEffect } from 'react';
import projects_data from '../../../assets/MyWork_data';
import theme_pattern from '../../../assets/theme_pattern.png';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects = ({ className }) => {
  // 🧠 Maintain current index per project
  const [currentIndexes, setCurrentIndexes] = useState(
    projects_data.map(() => 0)
  );

  // 🌀 Auto-slide for each project
  useEffect(() => {
    const intervals = projects_data.map((_, index) =>
      setInterval(() => {
        setCurrentIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          const imgLength = projects_data[index].p_img.length;
          newIndexes[index] = (newIndexes[index] + 1) % imgLength;
          return newIndexes;
        });
      }, 2000) // change image every 3 seconds
    );

    return () => intervals.forEach(clearInterval); // Cleanup
  }, []);

  const handlePrevClick = (projectIndex, imgLength) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[projectIndex] =
        (updated[projectIndex] - 1 + imgLength) % imgLength;
      return updated;
    });
  };

  const handleNextClick = (projectIndex, imgLength) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[projectIndex] = (updated[projectIndex] + 1) % imgLength;
      return updated;
    });
  };

  return (
    <section className={ `projects-section ${className}`} id='projects'>
      <div className="project-title">
        <h1>My Works...</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="projects-wrapper">
        {projects_data.map((project, index) => (
          <div
            key={project.p_no}
            className={`project-card ${project.p_no === 1 ? 'highlighted' : ''}`}
          >
            <div className="project-header">
              <h2>
                {project.p_logo && (
                  <img
                    src={project.p_logo}
                    alt="project logo"
                    className="project-logo"
                  />
                )}
                {project.p_title}
              </h2>

              <div className="project-links">
                {project.p_link && (
                  <a href={project.p_link} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={23} />
                  </a>
                )}
                {project.h_link && (
                  <a href={project.h_link} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink size={23} />
                  </a>
                )}
              </div>
            </div>

            <div className="project-images">
              <img
                src={project.p_img[currentIndexes[index]]}
                alt="Project"
              />
              {project.p_img.length > 1 && (
                <>
                  <button
                    onClick={() => handlePrevClick(index, project.p_img.length)}
                    className="prev-btn"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => handleNextClick(index, project.p_img.length)}
                    className="next-btn"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="project-description">
              <p>{project.p_abt}</p>
              <ul>
                {project.desc &&
                  project.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </div>

            {project.tech_stack && (
              <div className="project-tech-stack">
                <ul>
                  {project.tech_stack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;