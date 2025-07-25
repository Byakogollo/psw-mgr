import './App.css'
import { useState, useEffect, useRef } from 'react';

function Fondo() {
  const backgroundRef = useRef(null);
  const [numbers, setNumbers] = useState([]);
  const intervalRef = useRef(null);

        const newNumbers = shuffleArray(['A','B','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','(',')','_','-','?','/',';',':','[',']','{','}','<','>','|',]);

  function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function getGridSize() {
    const grid = backgroundRef.current;
    if (!grid) return 0;
    const styles = window.getComputedStyle(grid);
    const rows = styles.getPropertyValue("grid-template-rows").split(" ").length;
    const cols = styles.getPropertyValue("grid-template-columns").split(" ").length;
    return rows * cols;
  }

  function updateNumbers() {
    const totalCells = getGridSize();
    let result = [];
    while (result.length < totalCells) {
      result = result.concat(shuffleArray(newNumbers));
    }
    setNumbers(result.slice(0, totalCells));
  }

  function startShuffling() {
    if (!intervalRef.current) {
      updateNumbers();
      intervalRef.current = setInterval(updateNumbers, 500);
    }
  }

  function stopShuffling() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        startShuffling();
      } else {
        stopShuffling();
      }
    };

    handleVisibility();
    window.addEventListener("resize", updateNumbers);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopShuffling();
      window.removeEventListener("resize", updateNumbers);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      id="background"
      ref={backgroundRef}
      >
      {numbers.map((num, index) => (
        <div
          key={index}
          className="numContainer"
          style={{
            transition: "opacity 0.5s ease",
            opacity: 1,
          }}
        >
          <p
            style={{
              color: 'green',
              transition: "transform 0.5s ease",
              transform: `scale(${1 + Math.random() * 0.1})`
            }}
          >
            {num}
          </p>
        </div>
      ))}
    </div>
  );
}

 




export default Fondo