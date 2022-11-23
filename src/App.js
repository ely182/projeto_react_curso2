import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, seteReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    seteReverse((reverse) => !reverse);
  };

  const handleInclement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>contador:{counter}</h1>

        <p>
          <button type="button" onClick={handleInclement}>
            Incremento
          </button>
        </p>

        <p>
          <button type="button" onClick={handleClick}>
            Reverse{reverseClass}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
