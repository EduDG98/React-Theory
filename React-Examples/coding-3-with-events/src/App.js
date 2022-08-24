import { useState } from 'react';


function App() {

  const [relay, setRelay] = useState(true)

  const handleClick = () => setRelay(!relay)

  return (
    <div class='container'>
      <button onClick={handleClick}> {relay ? 'ON' : 'OFF'} </button>
    </div>
  );
}

export default App;
