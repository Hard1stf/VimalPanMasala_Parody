import { BrowserRouter,  } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';

function App() {
  return (
   <>
   <BrowserRouter>
      <NavBar />
      <h1 className="text-3xl font-bold text-red-600">Vimal Pan Masala</h1>
   </BrowserRouter>
    </>
  );
}

export default App;
