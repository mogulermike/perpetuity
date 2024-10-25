import './App.css';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Fish from './components/Projects/Fish';
import Roadtrips from './components/Roadtrips';
import Header from './components/Header';
// import Footer from './components/Footer';
import Sedona from './components/Locations/Sedona';
import Winterpark from './components/Locations/Winterpark';
import Destin from './components/Locations/Destin';
import Wildlife from './components/Locations/Wildlife';
import Pallette from './components/Projects/Pallette';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Updated imports
import Reviews from './components/Projects/Reviews/Reviews';
import FlagGame from './components/Projects/FlagGame/FlagGame';
import Auth from './components/Auth';
import ConfirmEmail from './components/ConfirmEmail';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        {' '}
        {/* Use Routes instead of Switch */}
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/fish' element={<Fish />} />
        <Route path='/photography' element={<Roadtrips />} />
        <Route path='/sedona' element={<Sedona />} />
        <Route path='/winterpark' element={<Winterpark />} />
        <Route path='/destin' element={<Destin />} />
        <Route path='/wildlife' element={<Wildlife />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/pallette' element={<Pallette />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/flags' element={<FlagGame />} />
        <Route path='/confirm-email' element={<ConfirmEmail />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
