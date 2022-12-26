import React from "react";
import "../App.css";
import Snowfall from 'react-snowfall'
//import { useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Confetti from 'react-dom-confetti';

function Game() {
  const [score, setScore] = React.useState(0);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [showFinalResult, setShowFinalResult] = React.useState(true);

  const MySwal = withReactContent(Swal)

  const [isExploding, setIsExploding] = React.useState(false);

  const config = {
    angle: "189",
    spread: "360",
    startVelocity: "85",
    elementCount: "151",
    dragFriction: "0.15",
    duration: "6480",
    stagger: 3,
    width: "9px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };


  /*
  // detect when a key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "1") {
        handleAnswer(elements[questionNumber].answers[0]);
      } else if (event.key === "2") {
        handleAnswer(elements[questionNumber].answers[1]);
      } else if (event.key === "3") {
        handleAnswer(elements[questionNumber].answers[2]);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }

  }, [questionNumber]);
  */

  const elements = [
    {
      question: "Quale delle seguenti azioni ha l'impatto ambientale più basso?",
      answers: [
        {
          id: 1,
          text: "Acquistare un nuovo smartphone ogni anno",
          correct: false
        },
        {
          id: 2,
          text: "Riparare il proprio smartphone quando si rompe",
          correct: false
        },
        {
          id: 3,
          text: "Utilizzare il proprio smartphone per più anni prima di sostituirlo",
          correct: true
        },
      ],
      reason: "L'impatto ambientale dello smaltimento di uno smartphone è relativamente alto a causa delle risorse utilizzate per la produzione e dei materiali presenti nello smartphone stesso, che possono essere difficili da riciclare o eliminare in modo sicuro. Pertanto, utilizzare il proprio smartphone per più anni prima di sostituirlo riduce il numero di smartphone che vengono smaltiti e quindi l'impatto ambientale complessivo."
    },
    {
      question: "Quale delle seguenti azioni ha l'impatto ambientale più alto?",
      answers: [
        {
          id: 1,
          text: "Utilizzare uno smartphone con una batteria a lunga durata",
          correct: false
        },
        {
          id: 2,
          text: "Utilizzare uno smartphone con una batteria a corta durata e sostituirla spesso",
          correct: true
        },
        {
          id: 3,
          text: "Utilizzare uno smartphone con una batteria a corta durata e non sostituirla mai",
          correct: false
        },
      ],
      reason: "Sostituire spesso la batteria di uno smartphone comporta un maggiore consumo di risorse e una maggiore produzione di rifiuti, a causa del processo di produzione e smaltimento delle batterie. Utilizzare uno smartphone con una batteria a lunga durata o sostituire la batteria solo quando necessario riduce l'impatto ambientale complessivo."
    },
    {
      question: "Quale delle seguenti azioni contribuisce maggiormente all'impatto ambientale degli smartphone?",
      answers: [
        {
          id: 1,
          text: "La produzione dello smartphone",
          correct: true
        },
        {
          id: 2,
          text: "L'utilizzo dello smartphone durante il suo ciclo di vita",
          correct: false
        },
        {
          id: 3,
          text: "Lo smaltimento dello smartphone al termine del suo ciclo di vita",
          correct: false
        },
      ],
      reason: "La produzione di uno smartphone comporta l'utilizzo di grandi quantità di energia e risorse, nonché l'emissione di sostanze inquinanti. Di conseguenza, l'impatto ambientale della produzione di uno smartphone è significativo e rappresenta una frazione significativa dell'impatto complessivo degli smartphone sull'ambiente."
    },
    {
      question: "Quale delle seguenti azioni ha l'impatto ambientale più basso?",
      answers: [
        {
          id: 1,
          text: "Acquistare un nuovo PC ogni anno",
          correct: false
        },
        {
          id: 2,
          text: "Riparare il proprio PC quando si rompe",
          correct: false
        },
        {
          id: 3,
          text: "Utilizzare il proprio PC per più anni prima di sostituirlo",
          correct: true
        },
      ],
      reason: "L'impatto ambientale dello smaltimento di un PC è relativamente alto a causa delle risorse utilizzate per la produzione e dei materiali presenti nel PC stesso, che possono essere difficili da riciclare o eliminare in modo sicuro. Pertanto, utilizzare il proprio PC per più anni prima di sostituirlo riduce il numero di PC che vengono smaltiti e quindi l'impatto ambientale complessivo."
    },
    {
      question: "Quale delle seguenti azioni ha l'impatto ambientale più alto?",
      answers: [
        {
          id: 1,
          text: "Utilizzare un PC con una scheda grafica di alta qualità",
          correct: false
        },
        {
          id: 2,
          text: "Utilizzare un PC con una scheda grafica di bassa qualità e sostituirla spesso",
          correct: false
        },
        {
          id: 3,
          text: "Utilizzare un PC con una scheda grafica di bassa qualità e non sostituirla mai",
          correct: true
        },
      ],
      reason: "Sostituire spesso una scheda grafica comporta un maggiore consumo di risorse e una maggiore produzione di rifiuti, a causa del processo di produzione e smaltimento delle schede grafiche. Utilizzare un PC con una scheda grafica di alta qualità o sostituire la scheda grafica solo quando necessario riduce l'impatto ambientale complessivo."
    },
    {
      question: "Quale delle seguenti azioni contribuisce maggiormente all'impatto ambientale dei PC?",
      answers: [
        {
          id: 1,
          text: "La produzione del PC",
          correct: false
        },
        {
          id: 2,
          text: "L'utilizzo del PC durante il suo ciclo di vita",
          correct: false
        },
        {
          id: 3,
          text: "Lo smaltimento del PC al termine del suo ciclo di vita",
          correct: true
        },
      ],
      reason: "La produzione di un PC comporta l'utilizzo di grandi quantità di energia e risorse, nonché l'emissione di sostanze inquinanti. Di conseguenza, l'impatto ambientale della produzione di un PC è significativo e rappresenta una frazione significativa dell'impatto complessivo dei PC sull'ambiente."
    },
  ];

  // Funzione che gestisce la risposta dell'utente e aggiorna il punteggio e se siamo all'ultima domanda
  const handleAnswer = (answer) => {
    if (answer.correct) {
      setScore(score + 1);
      
      setIsExploding(true);
      setTimeout(function(){
        
        MySwal.fire({
          title: <strong>Risposta Esatta!</strong>,
          icon: 'success',
          background: '#fff',
          color: '#055e05',
          confirmButtonColor: '#055e05',
          showConfirmButton: false,
        })
      }, 500);

      
      
      // wait 1 second
      setTimeout(function(){
        MySwal.close()
      }, 3000);  
      
    } else {
      setTimeout(function(){
        MySwal.fire({
          title: <strong>Risposta Errata!</strong>,
          icon: 'error',
          background: '#fff',
          color: '#ff0000',
          confirmButtonColor: '#ff0000',
          showConfirmButton: false,
        })
      }, 500);
      
      // wait 1 second
      setTimeout(function(){
        MySwal.close()
      }, 3000);
    }

    setTimeout(function(){
    if (questionNumber < elements.length - 1) {
      setQuestionNumber(questionNumber + 1);
      
    }

    // se siamo all'ultima domanda, nascondi il gioco e mostra il risultato finale
    if (questionNumber === elements.length - 1) {
      setShowFinalResult(false);
    }


    }, 3500);
  };
  
  return (
    <div className="about">
      <div className="App">
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

        { showFinalResult ? (

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
        
          <div class="question-container">
            <h1 class="question">{elements[questionNumber].question}</h1>
          </div>

          <div class="answers-btn-container">
            {elements[questionNumber].answers.map((answer) => (
              <button id="button-1" class="btn btn-lg" onClick={() => handleAnswer(answer)}>
                {answer.text}
              </button>
            ))}
          </div>

          <div class="score-container">
            <h4 class="score">PUNTEGGIO: {score}</h4>
          </div>

          

          <div class="progress progress_bar ">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: `${(questionNumber + 1) * 25}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          
          <Confetti active={ isExploding } config={ config }/>
          
        </div>
        ) : (
        <div id="content">
          <Snowfall
          changeFrequency="1000"
          snowflakeCount={150}
          />
          <h1 class="question">Hai totalizzato {score} {score > 1 ? "punti" : "punto"}!</h1>          
          <table class="table">
            <thead>
              <tr>
                <th class="text-start" scope="col">Domanda</th>
                <th class="text-start" scope="col">Risposta</th>
              </tr>
            </thead>
            <tbody>
              {elements.map((element) => (
                <tr>
                  <td class="text-start">{element.question}</td>
                  <td class="text-start">{element.answers.find((answer) => answer.correct).text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <br /><br />
          <button class="btn btn-warning btn-lg" onClick={() => window.location.reload(false)}>Ricomincia</button>
        </div>
        )}
        
      </div>
    </div>
    
  );
}

export default Game;