import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  // Create local state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    password: '',
    password2: '',
  });

  // destructure state values to make them controlled component
  const {
    username, email, role, password, password2,
  } = formData;

  // create state dispatcher to change default values
  // e.target.name makes onchange available for all fields
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // create submit logic without  REDUX

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
        Create Your Account
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email. Check FAQ page for instructions.
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="mentee, mentor or partner"
            name="role"
            value={role}
            onChange={(e) => onChange(e)}
            required
            id="role"
          />
          <small className="form-text">
            Please select how you want to be registered; mentee, mentor and partner
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
            minLength="8"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            required
            minLength="8"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account?
        {' '}
        <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

export default Register;
