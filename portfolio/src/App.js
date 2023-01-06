import NavBar from './NavBar';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import './index.css'
import Skills from './Skills';


function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills/" element={<Skills />}/>
      </Routes>
    
    </>
  );
}

export default App;
