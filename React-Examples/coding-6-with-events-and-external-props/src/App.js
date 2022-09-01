import './App.css';
import { Display } from './components/Display';
import { InputWrapper } from './components/InputWrapper';
import { CustomButton } from './components/CustomButton';
import { useState, useRef } from "react"

function App() {
  const inputRef = useRef(null);
  const [sentence, setSentence] = useState('');

  const handleOnWrite = newValue => {
    setSentence(newValue)
  }

  const handleError = () => {
    setSentence('');
  }

  const handleCheck = () => {
    inputRef.current.value = '';
  }

  return (
    <div className='container'>
      <div className='display-container'>
        <Display sentence={sentence} />
      </div>
      <div className='form-container'>
        <InputWrapper inputRef={inputRef} value={sentence} onWrite={handleOnWrite} />
        <CustomButton type='✔' onClick={handleCheck} />
        <CustomButton type='✖' onClick={handleError} />
      </div>
    </div>
  );
}

export default App;