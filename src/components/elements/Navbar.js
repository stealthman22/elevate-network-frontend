import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  //  auth links for registered
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">
           Profiles
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />
          {' '}
          <span className="hide-sm"> Dashboard</span>

        </Link>
      </li>
      <li>
        <Link onClick={logout} to="#!">
          <i className="fas fa-sign-out-alt" />
          {' '}
          <span className="hide-sm"> Logout</span>
        </Link>
      </li>
    </ul>
  );

  // guest links for visitors
  const guestLinks = (
    <ul>
      <li><Link to="/Events">Events</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          {/* <i className="fas fa-code" />
        {' '} */}
          Elevate Network
        </Link>
      </h1>
      {!loading && (
        <>
          {' '}
          {isAuthenticated ? authLinks : guestLinks}
          {' '}
        </>
      )}

    </nav>
  );
};
// proptypes
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.func,
  }).isRequired,
};

//  connect component to auth state
const mapStateToProps = () => (state) => ({
  auth: state.auth,
});

//  we wont use null here
// because we want to give it make it dependent on state
export default connect(mapStateToProps, { logout })(Navbar);
