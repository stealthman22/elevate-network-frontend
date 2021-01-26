// Packages
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components

import { Provider } from 'react-redux';
import Navbar from './components/elements/Navbar';
import Home from './components/Home';
import Community from './components/Community';
import Events from './components/Events';
import Faq from './components/Faq';
import Register from './components/auth-pages/Register';
import Login from './components/auth-pages/Login';
import ForgotPswd from './components/auth-pages/ForgotPassword';
import Alert from './components/elements/Alert';
import Dashboard from './components/private-pages/Dashboard';
import CreateMenteeProfile from './components/private-pages/profile-forms/CreateMenteeProfile';
import CreateMentorProfile from './components/private-pages/profile-forms/CreateMentorProfile';
import CreatePartnerProfile from './components/private-pages/profile-forms/CreatePartnerProfile';
import EditMenteeProfile from './components/private-pages/profile-forms/EditMenteeProfile';
// import MenteeProfile from './components/private-pages/profile-forms/handleMenteeProfile';
import PrivateRoute from './components/private-pages/PrivateRoute';
import './App.css';

// For Redux
//  connects react and redux
import store from './store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // Component did mount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Alert />
          <Switch>
            <Route exact path="/community" component={Community} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgotPassword" component={ForgotPswd} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-mentee-profile" component={CreateMenteeProfile} />
            <PrivateRoute exact path="/create-mentor-profile" component={CreateMentorProfile} />
            <PrivateRoute exact path="/create-partner-profile" component={CreatePartnerProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditMenteeProfile} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};
export default App;
