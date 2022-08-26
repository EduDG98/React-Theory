import './App.css';
import { Display } from './components/Display';
import { InputWrapper } from './components/InputWrapper';
import { CustomButton } from './components/CustomButton';

import { useState } from "react"


function App() {

  const [sentence, setSentence] = useState('- - - - - -');

  const handleOnWrite = newValue => {
    setSentence(newValue)
  }

  return (
    <div className='container'>

      <div className='display-container'>
        <Display sentence={sentence} />
      </div>

      <div className='form-container'>
        <InputWrapper onWrite={handleOnWrite} />


        <CustomButton />
        <CustomButton />

      </div>

    </div>
  );
}

export default App;
