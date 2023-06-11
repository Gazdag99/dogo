import { useState,useEffect } from 'react';
import dogimage from './components/dogimage';
import './App.css';

function App() {

  const [dogSrc,changeDog] = useState("https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg");

  function getNewDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      changeDog(data.message)

  
    });

  }

  return (
    <div className="App">
      <h2>Random Kutya Generátor</h2>
      <div className='wrapper'>
        <div className='dog-container'>
          <img className='dog' src={dogSrc} alt="" />
        </div>
      <button onClick={getNewDog}>Kutya</button>
      </div>
    </div>
  );
}

export default App;
