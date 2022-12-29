import NavBar from './NavBar';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import './index.css'


function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    
    </>
  );
}

export default App;
