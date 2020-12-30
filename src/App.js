// Packages
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import Community from './components/Community';
import Events from './components/Events';
import Faq from './components/Faq';
import Register from './components/auth-pages/Register';
import Login from './components/auth-pages/Login';
import ForgotPswd from './components/auth-pages/ForgotPassword';
import './App.css';

const App = () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/community" component={Community} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotPassword" component={ForgotPswd} />
      </Switch>
    </>
  </Router>
);

export default App;
