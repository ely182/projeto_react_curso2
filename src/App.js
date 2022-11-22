import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, seteReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    seteReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <button type="button" onClick={handleClick}>
          Reverse{reverseClass}
        </button>
      </header>
    </div>
  );
}

export default App;
