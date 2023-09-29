import React from 'react';
import './nav.scss';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
      <li><a href="#projets-realises">Projets réalisés</a></li>
        <li><a href="#mon-parcours">Mon parcours</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
