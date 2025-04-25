import React from 'react'
import { useState } from 'react';
import '../admincss/activities.css';

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewProject((prev) => ({ ...prev, image: e.target.files[0].name }));
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({
      title: '',
      description: '',
      link: '',
      image: '',
    });
    alert('Project added!');
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    alert('Project deleted!');
  };

  return (
    <div className="admin-projects">
      <h3>Edit Projects</h3>
      <form onSubmit={handleAddProject} className="admin-projects-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleInputChange}
            placeholder="Project Title"
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            rows="4"
            value={newProject.description}
            onChange={handleInputChange}
            placeholder="Project Description"
            required
          />
        </label>

        <label>
          Link:
          <input
            type="url"
            name="link"
            value={newProject.link}
            onChange={handleInputChange}
            placeholder="Project Link"
            required
          />
        </label>

        <label>
          Image (PNG):
          <input
            type="file"
            accept=".png"
            onChange={handleFileChange}
          />
        </label>

        <button type="submit">Add Project</button>
      </form>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={`/${project.image}`} alt={project.title} className="project-image" />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <button onClick={() => handleDeleteProject(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProjects;
