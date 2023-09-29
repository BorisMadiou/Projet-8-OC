import React from 'react';
import './intro.scss';

function Intro({ intro }) {
  return (
    <section className="intro">
        <h1>{intro.fr}</h1>
    </section>
  );
}

export default Intro;