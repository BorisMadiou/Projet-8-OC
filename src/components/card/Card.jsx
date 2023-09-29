import React, { useState } from 'react';
import './card.scss';

function Card({ projects }) {
  
  return (
    <div className='cards-container'>
      
        {projects.map((project, index) => (
          <div className="card" key={index}>
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
      
      
    </div>
  );
}

export default Card;
