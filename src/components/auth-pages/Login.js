import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

// For Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login }) => {
  // Create local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // destructure state values to make them controlled component
  const {
    email, password,
  } = formData;

  // create state dispatcher to change default values
  // e.target.name makes onchange available for all fields
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // create submit logic
  const onSubmit = async (e) => {
    e.preventDefault();
    // should be an object with properties
    login({ email, password });
  };

  return (
    <>
      <h1 className="large text-primary">LOG IN</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
        Log into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />

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

        </div>
        <input type="submit" className="btn btn-primary" value="Log in" />
      </form>
      <p className="my-1">
        Do not have an account?
        {' '}
        <Link to="/register">Sign Up</Link>
      </p>

    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

// redirect to dashboard

export default connect(null, { login })(Login);
