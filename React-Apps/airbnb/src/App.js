import './styles/App.css';
import { Navbar } from './components/navbar/Navbar';
import { Gallery } from './components/gallery-components/Gallery';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Gallery />
    </div>

  );
}

export default App;
