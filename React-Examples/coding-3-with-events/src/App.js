import { useState } from 'react';


function App() {

  const [relay, setRelay] = useState(true)

  const handleClick = () => setRelay(!relay)

  return (
    <div className='container'>
      <button onClick={handleClick}> {relay ? 'ON' : 'OFF'} </button>
    </div>
  );
}

export default App;
