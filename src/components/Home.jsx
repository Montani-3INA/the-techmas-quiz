import React from "react";
import Snowfall from 'react-snowfall'
import Typed from "react-typed"
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">

      <ul class="lightrope">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      <div id="content">
        <Snowfall 
          changeFrequency="1000"
          snowflakeCount={150}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        />

        <p class="home_text">Benvenuto nel Techmas Quiz</p>
        <p class="home_description">Indovina le risposte e scopri come l'ambiente reagisce alla tecnologia!<br></br>Cosa Aspetti?</p>

        <div class="home_game_link_section">
        <NavLink className="home_btn" to="/game">
        INIZIA A GIOCARE
        </NavLink>

        </div>

        <div class="greetings">
          <Typed
          strings={[
              "Un progetto di Enrico Bernardi",
              "Un progetto di Michele Amabili",
              "Un progetto di Gabriel Bulsei",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </div>
      
      </div>
    </div>
  );
}

export default Home;