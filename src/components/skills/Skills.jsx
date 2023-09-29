import React from 'react';
import './skills.scss'

function Skills({ skills }) {
  return (
    <section className='skills'>
      <h2>{skills.title.fr}</h2>
      <ul>
        {skills.fr.map((competence, index) => (
          <li key={index}>{competence}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
