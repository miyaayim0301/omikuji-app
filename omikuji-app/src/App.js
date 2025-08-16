import React, { useState } from 'react';
import './App.css';

const omikujiResults = ['大吉', '中吉', '小吉', '末吉', '凶'];

function App() {
  const [result, setResult] = useState(null);

  const drawOmikuji = () => {
    const randomIndex = Math.floor(Math.random() * omikujiResults.length);
    setResult(omikujiResults[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>おみくじ</h1>
        <button onClick={drawOmikuji}>おみくじを引く</button>
        {result && <h2>結果: {result}</h2>}
      </header>
    </div>
  );
}

export default App;
