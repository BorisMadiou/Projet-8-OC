import React from 'react';
import './about.scss';

function About({ about }) {
  return (
    <section id="about" className='about'>
        <p>{about.fr}</p>
    </section>
  );
}

export default About;