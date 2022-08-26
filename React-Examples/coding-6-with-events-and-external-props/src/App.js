import './App.css';
import { Display } from './components/Display';
import { InputWrapper } from './components/InputWrapper';
import { useState } from "react"


function App() {

  const [count, setCount] = useState(0);

/*   const handleIncreaseCounter = (textReceived) => {
    console.log(textReceived)
    setCount(count + 1);
  }
  const handleDecreaseCounter = () => {
    setCount(count - 1);
  } */



  return (
    <div class='container'>
      <div class='display-container'>
        <Display currentCount={count} />
      </div>
      <div class='button-container'>
        <InputWrapper />


        {/* <ButtonWrapper onButtonClick={handleIncreaseCounter} text='A' />
        <ButtonWrapper onButtonClick={handleDecreaseCounter} text='B' /> */}
      </div>
    </div>
  );
}

export default App;
