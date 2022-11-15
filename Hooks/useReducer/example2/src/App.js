import { Main } from './components/Main';
import { TodoContextProvider } from './context/TodoContext';

function App() {

  return (
    <TodoContextProvider>
      <Main />
    </TodoContextProvider>
  );
}

export default App;
