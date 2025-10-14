import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Inicio from './components/Inicio';
import Conocenos from './components/Conocenos';
import Historia from './components/Historia';
import Responsabilidad from './components/Responsabilidad';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/producto" component={Conocenos} />
        <Route path="/historia" component={Historia} />
        <Route path="/responsabilidad" component={Responsabilidad} />
        <Route path="/contacto" component={Contacto} />
        <Route exact path="/" component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
