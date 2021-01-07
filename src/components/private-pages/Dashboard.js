import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getCurrentProfile from '../../actions/profile';
import Spinner from '../elements/Spinner';

const Dashboard = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? <Spinner /> : (
    <>
      <h1 className="large text-primary">
        Dashboard
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
        Welcome
        {' '}
        {user && [user.user.role, ' ', user.user.username]}
        { console.log(user.user.role)}
      </p>
      {profile !== null ? (
        <>
          has
        </>
      )
        : (
          <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>

          </>
        )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.shape({
      user: PropTypes.shape({
        username: PropTypes.string,
        role: PropTypes.string,
      }),
    }),
  }).isRequired,
  profile: PropTypes.shape({
    loading: PropTypes.func,
    profile: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
