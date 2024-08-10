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
import { Route, Switch } from 'react-router-dom';
import Reviews from './components/Projects/Reviews/Reviews';
import FlagGame from './components/Projects/FlagGame/FlagGame';

function App() {
  return (
    <div className='App'>
      <Header />

      <Switch>
        <Route exact path={['/home', '/']}>
          <HomePage />
        </Route>

        <Route path='/fish'>
          <Fish></Fish>
        </Route>

        <Route path='/photography'>
          <Roadtrips></Roadtrips>
        </Route>

        <Route path='/sedona'>
          <Sedona></Sedona>
        </Route>

        <Route path='/winterpark'>
          <Winterpark></Winterpark>
        </Route>

        <Route path='/destin'>
          <Destin></Destin>
        </Route>

        <Route path='/wildlife'>
          <Wildlife></Wildlife>
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/pallette'>
          <Pallette></Pallette>
        </Route>

        <Route path='/reviews'>
          <Reviews></Reviews>
        </Route>

        <Route path='/flags'>
          <FlagGame></FlagGame>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
