import { useState } from 'react';
import './App.css';


const App = () => {

  const [count, setCount] = useState(0);

  const decrementCount = () => setCount(count - 1)
  const increaseCount = () => setCount(count + 1)
  const resetCount = () => setCount(0)

  return (
    <div class='main-container'>
      <div class='container-1'>

        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>

      </div>

      <div class='container-2'>
        <button onClick={resetCount}>RESET</button>

      </div>

    </div>
  );
}

export default App;
