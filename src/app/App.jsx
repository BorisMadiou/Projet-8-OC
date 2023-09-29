import React from 'react';
import './app.scss';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import Intro from '../components/intro/Intro.jsx';
import About from '../components/About/About';
import Skills from '../components/skills/Skills';
import Technos from '../components/technos/Tecnos';
import Card from '../components/card/Card';
import Contact from '../components/contact/Contact';


import text from '/Projet-8-OC/src/assets/content/text.json';
import projects from '/Projet-8-OC/src/assets/content/projects.json';

function App() {
  return (
    <>
      <h1 className='hello'>HELLO<br />WORLD!</h1>
      <Header />
      <Nav />
      <Intro intro={text.intro} />
      <h1 className='my-work' id='projets-realises'>MY WORKS</h1>
      <Card projects={projects.projects}></Card>
      <h1 className='story' id='mon-parcours'>MY<br/>STORY</h1>
      <About about={text.about} />
      <h1 className='my-skills'id='competences'>SKILLS</h1>
      <Skills skills={text.skills}></Skills>
      <h1 className='my-technos'id='technologies'>TECHNOS</h1>
      <Technos technologies={text.technologies}></Technos>
      <Contact contact={text.contact}></Contact>
    </>
  );
}

export default App;
