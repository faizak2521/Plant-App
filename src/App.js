import React, {useState} from 'react';
import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg'; 
import plantBtn from './assets/plantBtn.PNG';
const clickSound = process.env.PUBLIC_URL + '/clickSound.mp3'; 

function App () {
  const [isWatered1, setIsWatered1] = useState(false);
  const [isWatered2, setIsWatered2] = useState(false);
  const [isWatered3, setIsWatered3] = useState(false);
  
  const handleWaterClick1 = () => {
    setIsWatered1(true);
    setTimeout(() => setIsWatered1(false), 1500);
  };
  
  const handleWaterClick2 = () => {
    setIsWatered2(true);
    setTimeout(() => setIsWatered2(false), 1500);
  };
  
  const handleWaterClick3 = () => {
    setIsWatered3(true);
    setTimeout(() => setIsWatered3(false), 1500);
  };

  const playRainSound = () => {
    // Creates a new audio object using the rain sound located in public folder
    const audio = new Audio(process.env.PUBLIC_URL + '/rain-sound.mp3');
    audio.volume = 1; // Set the initial volume to full (1=100%)
    audio.play(); // Starts audio

    // Duration of the fade-out effect in ms (1800=1.8 seconds)
    const fadeOutDuration = 1800; // ms
    const fadeStep = 100; // Reduces volume every 100ms
    // Calculates how much volume should decrease
    const fadeAmount = 1 / (fadeOutDuration / fadeStep);  
  
    let fading = false; // Ensures fade out only starts once
  
    // Function runs repeatedly as the audio plays and time updates
    audio.addEventListener('timeupdate', () => {
      // Calculate how much time is left until the audio ends
      const remainingTime = audio.duration - audio.currentTime;
  
      // If fading hasn't started and theres less than 1.8 seconds do not fade and keep volume 100
      if (!fading && remainingTime <= fadeOutDuration / 1000) {
        fading = true;
        
        // Start reducing the colume every 100ms
        const fadeOutInterval = setInterval(() => {
          // If volume is greater then fade amount, lower it
          if (audio.volume > fadeAmount) {
            // Reduces volume but does not cross range below 0
            audio.volume = Math.max(0, audio.volume - fadeAmount);
          } else {
            // Stops audio once it is at lowest
            audio.volume = 0;
            clearInterval(fadeOutInterval);
          }
        }, fadeStep);
      }
    });
  };


  /* Listens for any click on window to play mouse sound*/
  useEffect(() => {
    const handleGlobalClick = () => {
      const audio = new Audio(clickSound);
      audio.play();
    };
  
    // Add event listener
    window.addEventListener('click', handleGlobalClick);
  
    // Clean up when component unmounts
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="app">
      <header className='header-title'>
        <h1> water me🌱</h1>
      </header>
    
      <section className="plant-row">
        <div className='plant-container'>
          <img // Plants sway when watered is true, and stays put when false unless hovered over
            className={`plant-img ${isWatered1 ? 'swaying': ''}`} 
            src={logo} 
            alt='Plant 1'
          />
          {isWatered1 && <div className='water-animation'> 💧<br /><br />💧 💧 💧<br /><br /> 💧 💧</div> }
          <p className='plant-name'>lushy</p>
          <button
            onClick={() => {
              playRainSound();
              handleWaterClick1(); // this sets the plant as watered or shows the droplets
            }}
            className='water-btn-img'
            
          >
          <img src={plantBtn} alt="Plant watered" className="btn-img" />
        </button>
        <p className="btn-comment">(press me)</p>
        </div>

        <div className='plant-container'>
          <img 
            className={`plant-img ${isWatered2 ? 'swaying': ''}`}
            src={logo} 
            alt='Plant 2'
          />
          {isWatered2 && <div className='water-animation'> 💧<br /><br />💧 💧 💧<br /><br /> 💧 💧</div> }
          <p className='plant-name'>huzzlicious</p>
          <button
            onClick={() => {
              playRainSound();
              handleWaterClick2(); // this sets the plant as watered, or shows the droplets
            }}
            className='water-btn-img'
          >
          <img src={plantBtn} alt="Plant watered" className="btn-img" />
        </button>
        <p className="btn-comment">(press me)</p>
        </div>

        <div className='plant-container'>
          <img 
            className={`plant-img ${isWatered3 ? 'swaying': ''}`}
            src={logo} 
            alt='Plant 3' 
          />
          {isWatered3 && <div className='water-animation'> 💧<br /><br />💧 💧 💧<br /><br /> 💧 💧</div>}
          <p className='plant-name'>sambam</p>
          <button
            onClick={() => {
              playRainSound();
              handleWaterClick3(); // this sets the plant as watered, or shows the droplets
            }}
            className='water-btn-img'
          >
          <img src={plantBtn} alt="Plant watered" className="btn-img" />
        </button>
        <p className="btn-comment">(press me)</p>
      </div>
      </section>

      </div>
  );
}

export default App;
