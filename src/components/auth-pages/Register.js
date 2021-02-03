import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//  for Redux
import { connect } from 'react-redux';
import setAlert from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
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

  // create submit logic
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        username, email, role, password,
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <div className="reg-wrapper">
        <div className="reg-ctn">
          <h1 className="medium text-primary text-center">Sign Up</h1>
          <p className="lead text-center">
            <i className="fas fa-user" />
            {' '}
        Create Your Account
          </p>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">

              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <small className="form-text">
            please use a Gravatar email. Check FAQ page for instructions.
              </small>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />

            </div>
            <div className="form-group">
              <small className="form-text">
            Register as either mentee, mentor or partner
              </small>
              {/* <input
            type="text"
            placeholder="Mentee, Mentor or Partner"
            name="role"
            value={role}
            onChange={(e) => onChange(e)}
            id="role"
          /> */}

              <select
                name="role"
                onChange={(e) => onChange(e)}
                id="role"
              >
                <option value="0">---Select an option below---</option>
                <option value="Mentee">Mentee</option>
                <option value="Mentor">Mentor</option>
                <option value="Partner">Partner</option>
              </select>

            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
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
                minLength="8"
              />
            </div>
            <input type="submit" className="btn btn-primary ml" value="Register" />
          </form>
          <p className="py-1 text-center">
            <span>Already have an account? </span>

            <Link to="/login">Sign In</Link>
          </p>

        </div>
      </div>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
