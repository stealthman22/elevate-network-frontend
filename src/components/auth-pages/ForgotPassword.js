import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

// For Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetPswd } from '../../redux/actions/auth';

const ForgotPassword = ({ resetPswd, isAuthenticated }) => {
  // Create local state
  const [formData, setFormData] = useState({
    email: '',
  });

  // destructure state values to make them controlled component
  const {
    email,
  } = formData;

  // create state dispatcher to change default values
  // e.target.name makes onchange available for all fields
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // create submit logic
  const onSubmit = async (e) => {
    e.preventDefault();
    // should be an object with properties
    resetPswd({ email });
  };
  //  redirect to dashboard if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <div className=" auth-wrapper ">

        <div className="auth-ctn">
          <h1 className="medium text-primary text-center">Forgot Password</h1>
          <div className="left" />
          <div className="right">
            <p className="lead text-center">
              <i className="fas fa-user" />
              {' '}
              <span>Reset Your Password</span>
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

              </div>
              <input
                type="submit"
                className="btn btn-primary ml"
                value="Reset"
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

ForgotPassword.propTypes = {
  resetPswd: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { resetPswd })(ForgotPassword);
