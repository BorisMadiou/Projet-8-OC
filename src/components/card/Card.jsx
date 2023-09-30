import React, { useState } from 'react';
import './card.scss';
import Modal from '../modal/Modal';

function Card({ projects }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.classList.add('body-lock');
  };

  const closeModal = () => {
    setIsModalOpen(false);

    document.body.classList.remove('body-lock');
  };
  

  return (
    <div className='cards-container'>
      {projects.map((project, index) => (
        <div className="card" key={index} onClick={() => openModal(project)}>
          <img className='cards-cover' src={project.cover.image} alt={project.title} />
          <h3 className='card-title'>{project.title}</h3>
          <div className="cards-logos-container">
            {project.logos.map((logo, logoIndex) => (
              <img
                className='cards-logos'
                key={logoIndex}
                src={logo}
                alt={`${project.title} Logo ${logoIndex}`}
              />
            ))}
          </div>
        </div>
      ))}
      {isModalOpen && selectedProject && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          selectedProject={selectedProject}
        />
      )}
    </div>
  );
}

export default Card;
