import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Pages/Home';

function App() {


  return (
    <>
    <Router>
     <Header/>
     <Home/>
     </Router>
    </>
  )
}

export default App
