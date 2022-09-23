import React from 'react';
import './App.css';
import Dailydeals from './pages/Dailydeals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Offer from './pages/Offer';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dailydeals' element={<Dailydeals />}/>
        <Route path='offerzone'  element={<Offer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
