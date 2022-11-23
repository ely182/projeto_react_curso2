import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // // componentDidUpdate - execulta toda vez que o compomente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // // componentDidMount - execulta 1x
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);

    //componentWillUnmount - limpeza
    return () => {
      document.querySelectot('h1')?.addEventListener('click', eventFn);
    };
  }, []);

  // com dependencia- execulta toda vez que a dependencia mudar
  useEffect(() => {
    console.log('c1', counter, 'c2', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>
        c1: {counter} c2:{counter2}
        {''}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Aperte aqui</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Aperte aqui2</button>
    </div>
  );
}

export default App;
