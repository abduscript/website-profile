import React from 'react'

import { useState } from 'react';
import '../styles/projects.css';
import defaultImg from './default.jpg'


const projectsData = [
{
    id: 1,
    title: 'POS Website',
    description: 'A modern Point of Sale system built with React and Express.',
    image: {defaultImg},
},
{
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Vite.',
    image: 'https://via.placeholder.com/300x200',
},
{
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Vite.',
    image: 'https://via.placeholder.com/300x200',
},
{
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Vite.',
    image: 'https://via.placeholder.com/300x200',
},
  // Tambah project lainnya sesuai kebutuhan
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

return (
    <section className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
            {projectsData.map((project) => (
            <div
                key={project.id}
                className="project-card"
                onClick={() => openModal(project)}
            >
                <img src={defaultImg} alt={project.title} />
                <h3>{project.title}</h3>
            </div>
            ))}
        </div>

        {selectedProject && (
            <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedProject.title}</h2>
                <img src={defaultImg} alt={selectedProject.title} />
                <p>{selectedProject.description}</p>
                <button onClick={closeModal}>Close</button>
            </div>
            </div>
        )}
        </section>
    );
}

export default Projects;
