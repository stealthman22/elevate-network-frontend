import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        {user && user.user.username}
      </p>
      {profile !== null ? (
        <>
          has
        </>
      )
        : (
          <>
            has not
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
