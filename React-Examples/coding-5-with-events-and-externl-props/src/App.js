import './App.css';
import { Display } from './components/Display';
import { ButtonWrapper } from './components/ButtonWrapper';
import { useState } from 'react'

const App = () => {

  const [letter, setLetter] = useState('-');

  const handleOnClick = (char) => setLetter(char)

  return (
    <>
      <div className='container'>

        <div className='display-container'>
          <Display text={letter} />
        </div>

        <div className='button-container'>
          <ButtonWrapper onClick={handleOnClick} char='A' />
          <ButtonWrapper onClick={handleOnClick} char='B' />
          <ButtonWrapper onClick={handleOnClick} char='C' />
          <ButtonWrapper onClick={handleOnClick} char='D' />
        </div>

      </div>
    </>
  );
}

export default App;
