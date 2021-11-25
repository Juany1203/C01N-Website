import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Crypto from './pages/Crypto'
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path= "/" exact element={<Home/>}/>
        <Route exact path= "/Crypto" element={<Crypto/>} />
      </Routes>
    </Router>
  );
}
export default App;


