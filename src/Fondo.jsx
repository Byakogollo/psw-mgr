
import './App.css'
  
import React, { useState, useEffect } from 'react';

function Fondo() {
  const [numbers, setNumbers] = useState([]);

  // Fisher-Yates shuffle
  function shuffleArray(arr) {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    function handleVisibilityChange() {
      if (!document.hidden) {
        const newNumbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        setNumbers(newNumbers);
      }
    }

    // Initial shuffle
    handleVisibilityChange();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div id='background'>
      {numbers.map((num, index) => (
        <div
          key={index}
          className='numContainer'
        >
          <p>{num}</p>
        </div>
      ))}
    </div>
  );
}

 




export default Fondo