import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

// For Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

const Login = ({ login, isAuthenticated }) => {
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
  //  redirect to dashboard if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <div className=" auth-wrapper ">

        <div className="auth-ctn">
          <h1 className="medium text-primary text-center">LOG IN</h1>
          <div className="left" />
          <div className="right">
            <p className="lead text-center">
              <i className="fas fa-user" />
              {' '}
              <span>Log into Your Account</span>
            </p>

            <form className="form " onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />

                <div className=" py-1">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    minLength="8"
                  />
                </div>

              </div>
              <input
                type="submit"
                className="btn btn-primary ml"
                value="Log in"
              />
            </form>
            <p className="py-1 text-center">
              <span>Don&apos;t have an account?</span>
              <br />
              <Link to="/register">Sign Up </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
