import React, { useState, useEffect } from 'react';
import './App.css';
//change1
function App() {
  const [level, setLevel] = useState(1);
  const [pin, setPin] = useState([]);
  const [input, setInput] = useState([]);
  const [message, setMessage] = useState('');
  const [numDigits, setNumDigits] = useState(level + 2);

  useEffect(() => {
    generateRandomPin(numDigits);
  }, [numDigits]);

  const generateRandomPin = (n) => {
    if (n > 10) {
      throw new Error("Cannot generate a PIN with more than 10 distinct digits.");
    }

    const usedNumbers = new Set();
    const newPin = [];
    
    while (newPin.length < n) {
      const digit = Math.floor(Math.random() * 10);
      if (!usedNumbers.has(digit)) {
        newPin.push(digit);
        usedNumbers.add(digit);
      }
    }
    
    setPin(newPin);
  };

  const handleInputChange = (index, value) => {
    const newInput = [...input];
    newInput[index] = value;
    setInput(newInput);
  };

  const checkGuess = () => {
    let count = 0;
    let inPlace = 0;

    input.forEach((num, i) => {
      if (pin.includes(parseInt(num))) {
        count++;
        if (pin[i] === parseInt(num)) {
          inPlace++;
        }
      }
    });

    if (inPlace === pin.length) {
      setMessage("Correct! Moving to the next level.");
      setLevel(level + 1);
      setNumDigits(level + 3);
      setInput([]);
    } else {
      setMessage(`Elements present: ${count}, In place: ${inPlace}`);
    }
  };

  return (
    <div className="App">
      <h1>PIN Guessing Game</h1>
      <h2>Level {level}</h2>
      <h3>Guess the {numDigits}-digit PIN (with distinct digits)</h3>
      <div>
        {Array.from({ length: numDigits }, (_, index) => (
          <input
            key={index}
            type="number"
            max="9"
            min="0"
            onChange={(e) => handleInputChange(index, e.target.value)}
            value={input[index] || ''}
          />
        ))}
      </div>
      <button onClick={checkGuess}>Submit Guess</button>
      {message && <p>{message}</p>}

      
      <footer>
        <p>Created by Hrishikesan on 25/10/2024</p>
      </footer>
    </div>
  );
}

export default App;
