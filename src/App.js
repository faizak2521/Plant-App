import React, {useState} from 'react';
import './App.css';
import logo from './logo.svg'; 


function App() {
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
    const audio = new Audio(process.env.PUBLIC_URL + '/rain-sound.mp3');
    audio.play();
  }

  return (
    <div className="app">
      <header className='header-title'>
        <h1> water me🌱</h1>
      </header>
    
      <section className="plant-row">
        <div className='plant-container'>
          <img className="plant-img" src={logo} alt='Plant 1'/>
          {isWatered1 && <div className='water-animation'> 💧<br /><br />💧 💧 💧<br /><br /> 💧 💧</div> }
          <p className='plant-name'>lushy</p>
          <button
            onClick={() => {
              playRainSound();
              handleWaterClick1(); // this sets the plant as watered or shows the droplets
            }}
            className='water-btn-img'
          >
          <img src={logo} alt="Plant watered" className="btn-img" />
        </button>
        </div>

        <div className='plant-container'>
          <img className="plant-img" src={logo} alt='Plant 2'/>
          {isWatered2 && <div className='water-animation'> 💧<br /><br />💧 💧 💧<br /><br /> 💧 💧</div> }
          <p className='plant-name'>huzzlicious</p>
          <button
            onClick={() => {
              playRainSound();
              handleWaterClick2(); // this sets the plant as watered, or shows the droplets
            }}
            className='water-btn-img'
          >
          <img src={logo} alt="Plant watered" className="btn-img" />
        </button>
        </div>

        <div className='plant-container'>
          <img className="plant-img" src={logo} alt='Plant 3' />
          {isWatered3 && <div className='water-animation'> 💧<br /><br />💧 💧 💧<br /><br /> 💧 💧</div>}
          <p className='plant-name'>sami</p>
          <button
            onClick={() => {
              playRainSound();
              handleWaterClick3(); // this sets the plant as watered, or shows the droplets
            }}
            className='water-btn-img'
          >
          <img src={logo} alt="Plant watered" className="btn-img" />
        </button>
      </div>
      </section>

      </div>
  );
}

export default App;
