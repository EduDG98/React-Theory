import { Main } from './components/Main';
import { TodoContextProvider } from './context/TodoContext';
import './App.css';

function App() {

  return (
    <>
      <h1>add a to do ...</h1>
      <TodoContextProvider>
        <div className='mainWrapper'>
          <Main />
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
