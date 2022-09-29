import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import LandingPage from './componentes/landingPage/LandingPage';
import Home from './componentes/home/Home';

import CreatePokemon from './componentes/createPokemon/CreatePokemon';
import DetailPokemon from './componentes/detailPokemon/DetailPokemon';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Pokemon" component={CreatePokemon} />
          <Route exact path="/home/:id" component={DetailPokemon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
