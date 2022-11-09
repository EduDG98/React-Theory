import { AuthContextProvider } from './context/authContext';
import { Main } from './components/Main';

function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}

export default App;
