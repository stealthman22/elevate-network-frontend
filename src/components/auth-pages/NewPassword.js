import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link, useParams, Redirect } from 'react-router-dom';

// For Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newPswd } from '../../redux/actions/auth';

const NewPassword = ({ newPswd, isAuthenticated }) => {
  // Create local state
  const [formData, setFormData] = useState({
    password: '',
  });
  const { token } = useParams();
  console.log(token);
  // destructure state values to make them controlled component
  const {
    password,
  } = formData;

  // create state dispatcher to change default values
  // e.target.name makes onchange available for all fields
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // create submit logic
  const onSubmit = async (e) => {
    e.preventDefault();
    // should be an object with properties
    newPswd({ password, token });
  };
  //  redirect to dashboard if logged in

  return (
    <>
      <div className=" auth-wrapper ">

        <div className="auth-ctn">
          <h1 className="medium text-primary text-center">NewPassword</h1>
          <div className="left" />
          <div className="right">
            <p className="lead text-center">
              <i className="fas fa-user" />
              {' '}
              <span>Reset Your Password</span>
            </p>

            <form className="form " onSubmit={(e) => onSubmit(e)}>
              <div className=" py-1">
                <input
                  type="password"
                  placeholder="New Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="8"
                />

              </div>
              <input
                type="submit"
                className="btn btn-primary ml"
                value="Update Password"
              />
            </form>
            <p className="py-1 text-center">

              <Link to="/login">Log in </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

NewPassword.propTypes = {
  newPswd: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { newPswd })(NewPassword);
