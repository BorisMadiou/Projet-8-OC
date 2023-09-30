import React, { useState } from 'react';
import './modal.scss';
import Accordion from '../accordion/Accordion'; // Importez le composant Accordion

function Modal({ isOpen, closeModal, selectedProject }) {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!isOpen || !selectedProject) {
    return null;
  }

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
    setIsPhotoOpen(true);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
    setIsPhotoOpen(false);
  };

  const handleModalClick = (event) => {
    // Empêcher la propagation du clic aux éléments enfants
    event.stopPropagation();
  };

  return (
    <div className='modal-overlay' onClick={closeModal}>  
      <div className='modal' onClick={handleModalClick}>
        <div className='modal-content'>
          <div className='modal-title-button'>
            <p>Mission:{selectedProject.description}</p>
            <button onClick={closeModal}>X</button>
          </div>
          <div className='accordion-wrapper'>
            <Accordion title="Le projet" content={selectedProject["Le projet"]} />
            <Accordion title="Compétences acquises" content={selectedProject["Compétences acquises"]} />
          </div>
          <div className='project-fotos'>
            {selectedProject.fotos.map((photo, index) => (
              <div
                key={index}
                className='foto-wrapper'
                onClick={() => openPhoto(photo)}
              >
                <img
                  src={photo.image}
                  alt={`Photo ${index + 1}`}
                  className='photo'
                />
              </div>
            ))}
          </div>
          <div className='repo-wrapper'>
            <a className='repo' href={selectedProject.githubRepo}>Repo GitHub</a>
          </div>
        </div>
      </div>
      {isPhotoOpen && selectedPhoto && (
        <div className='fullscreen-foto' onClick={handleModalClick}>
          <img
            src={selectedPhoto.image}
            alt={`Photo`}
            className='fullscreen-image'
            onClick={closePhoto}
          />
        </div>
      )}
    </div>
  );
}

export default Modal;
