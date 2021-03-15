// Packages
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components

import { Provider } from 'react-redux';
import Navbar from './components/elements/Navbar';
import Logo from './components/elements/Logo';
import Home from './components/Home';
import Community from './components/Community';
import Programs from './components/Programs';
import Faq from './components/Faq';
import Register from './components/auth-pages/Register';
import Login from './components/auth-pages/Login';
import ForgotPassword from './components/auth-pages/ForgotPassword';
import NewPassword from './components/auth-pages/NewPassword';
import Alert from './components/elements/Alert';
import Dashboard from './components/private-pages/Dashboard';
import CreateMenteeProfile from './components/private-pages/profile-forms/CreateMenteeProfile';
import CreateMentorProfile from './components/private-pages/profile-forms/CreateMentorProfile';
import CreatePartnerProfile from './components/private-pages/profile-forms/CreatePartnerProfile';
import EditProfile from './components/private-pages/profile-forms/EditProfile';
import AddExp from './components/private-pages/profile-forms/AddExp';
import AddEdu from './components/private-pages/profile-forms/AddEdu';
// import MenteeProfile from './components/private-pages/profile-forms/handleMenteeProfile';
import PrivateRoute from './components/private-pages/PrivateRoute';
import PartnerProfiles from './components/private-pages/profiles/PartnerProfiles';
import MentorProfiles from './components/private-pages/profiles/MentorProfiles';
import MenteeProfiles from './components/private-pages/profiles/MenteeProfiles';
import MenteeProfile from './components/private-pages/profile/MenteeProfile';
import MentorProfile from './components/private-pages/profile/MentorProfile';
import PartnerProfile from './components/private-pages/profile/PartnerProfile';
import PicUpload from './components/private-pages/profile-forms/PicUpload';
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
          <Logo />
          <Navbar />
          <Route exact path="/" component={Home} />
          <Alert />
          <Switch>
            <Route exact path="/community" component={Community} />
            <Route exact path="/programs" component={Programs} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password/:token" component={NewPassword} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/partner-profiles" component={PartnerProfiles} />
            <PrivateRoute exact path="/mentor-profiles" component={MentorProfiles} />
            <PrivateRoute exact path="/mentee-profiles" component={MenteeProfiles} />
            <PrivateRoute exact path="/mentee-profile/:id" component={MenteeProfile} />
            <PrivateRoute exact path="/mentor-profile/:id" component={MentorProfile} />
            <PrivateRoute exact path="/partner-profile/:id" component={PartnerProfile} />
            <PrivateRoute exact path="/create-mentee-profile" component={CreateMenteeProfile} />
            <PrivateRoute exact path="/create-mentor-profile" component={CreateMentorProfile} />
            <PrivateRoute exact path="/create-partner-profile" component={CreatePartnerProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/add-experience" component={AddExp} />
            <PrivateRoute exact path="/add-education" component={AddEdu} />
            <PrivateRoute exact path="/pic-upload" component={PicUpload} />

          </Switch>
        </>
      </Router>
    </Provider>
  );
};
export default App;
