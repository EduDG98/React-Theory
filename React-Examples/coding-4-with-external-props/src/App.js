import './App.css';
import { Display } from './components/Display'
import { ButtonWrapper } from './components/ButtonWrapper'
import { useState } from 'react'


const App = () => {

  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => setCount(count + 1)
  const handleDescreaseCount = () => setCount(count - 1)


  return (
    <div className='container'>

      <div className='display-container'>
        <Display myCountProp={count} />
      </div>

      <div className='button-container'>
        <ButtonWrapper symbol='+' onClickProp={handleIncreaseCount} />
        <ButtonWrapper symbol='-' onClickProp={handleDescreaseCount} />
      </div>

    </div>
  );
}

export default App;
