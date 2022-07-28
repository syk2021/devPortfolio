import './App.css';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
    </Routes>
    </>
  );
}

export default App;
