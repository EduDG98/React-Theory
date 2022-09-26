import './App.css';
import { useEffect, useState } from 'react';



let count = 0;

function App() {
  const [state, setState] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [])

  return (
    <div className="app-wrapper">
      <button onClick={() => setCount(count + 1)}>Boton</button>
      <button onClick={() => setCount(count + 1)}>Boton</button>
      <button onClick={() => setCount(count + 1)}>Boton</button>

      <div>
        <p>El boton pulsado es: {state}</p>
        <p>El nº de render es: {count}</p>

      </div>
    </div>
  );
}

export default App;
