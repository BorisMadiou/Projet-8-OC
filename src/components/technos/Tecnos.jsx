import React, { useState } from 'react';
import './technos.scss';

function Technos({ technologies }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="technos" className='technos'>
      <div className="technos-list">
        <h2>{technologies.title}</h2>
        <ul>
          {technologies.technos.map((techno, index) => (
            <li
              key={index}
              className={hoveredIndex === index ? 'hovered' : ''}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3>{techno.title}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="technos-logos">
        {technologies.technos.map((techno, index) => (
          <div key={index} className="techno-logo">
            <img
              src={techno.logo}
              alt={`${techno.title} Logo`}
              className={hoveredIndex === index ? 'hovered' : ''}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technos;
