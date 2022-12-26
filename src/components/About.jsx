import React from "react";
import Snowfall from 'react-snowfall'
import TechMasDevs from './images/TechMasDevs.webp'

function About() {
  return (
    <div id="home-content">
      <Snowfall 
      changeFrequency="1000"
      snowflakeCount={150}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}
      />

      <div class="page-title">
        <h1>About Us</h1>
      </div>
      <div class="about_text">
        <p>
          Siamo un gruppo di studenti dell'Istituto Tecnico Montani di Fermo, nelle Marche.<br></br>
          Questo progetto è stato presentato durante il Tombolone Scientifico 2022, organizzato dalla scuola.
        </p>
      </div>

      <img src={TechMasDevs} className="about_image" alt="" loading="lazy"/>

      <div class="about_text">
        <p>
          La parte logica del sito è sviluppata in <a href="https://reactjs.org/" >React JS</a>.<br></br>
          Mentre la struttura e la grafica, sono sviluppate relativamente in HTML e CSS.
        </p>
      </div>

    </div>
  );
}

export default About;