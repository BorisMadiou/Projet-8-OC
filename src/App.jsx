import React from 'react';
import './app.scss';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import Intro from './components/intro/Intro.jsx';
import Card from './components/card/Card.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Technos from './components/technos/Tecnos.jsx';
import Contact from './components/contact/Contact.jsx';


import text from '../public/assets/content/text.json';
import projects from '../public/assets/content/projects.json';


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
