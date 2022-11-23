/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho redereizou');
  return <button onClick={() => incrementButton(100)}>Aperte aqui</button>;
});

Button.proptypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('pai redenrizou');
  return (
    <div className="App">
      <p>teste</p>
      <h1>c1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
