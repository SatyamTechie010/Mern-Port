// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoLink: 'https://your-portfolio-link.com',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'A fully-featured e-commerce application with a product catalog and checkout system.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://your-ecommerce-link.com',
    codeLink: 'https://github.com/yourusername/ecommerce-app',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">GitHub Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
