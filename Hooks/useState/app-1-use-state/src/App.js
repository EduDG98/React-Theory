import './App.css';
import { useEffect, useState } from 'react';



let count = 0;

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [])

  return (
    <div className="app-wrapper">
      <h2>The count is {count}</h2>
      <div className='button-wrapper'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default App;
