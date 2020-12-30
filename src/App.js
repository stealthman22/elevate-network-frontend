// Packages
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import Community from './components/Community';
import './App.css';

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/community" component={Community} />
      </Switch>
    </>
  </Router>
);

export default App;
