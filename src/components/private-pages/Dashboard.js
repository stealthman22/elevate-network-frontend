import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../redux/actions/profile';
import Spinner from '../elements/Spinner';
import DashboardActions from './DashboardActions';
import ListExp from './ListExp';
import ListEdu from './ListEdu';
// import CreateMenteeProfile from './profile-forms/CreateMenteeProfile';
// import CreateMentorProfile from './profile-forms/CreateMentorProfile';

const Dashboard = ({
  getCurrentProfile,
  profile: { profile, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  // const onClick = () => {
  //   if (user.user.role === 'Mentee') {
  //     return CreateMenteeProfile;
  //   }
  //   return CreateMentorProfile;
  // };

  return loading && profile === null ? <Spinner /> : (
    <>
      <h1 className="large text-primary">
        Dashboard
      </h1>
      <p className="lead">
        <i className="fa fa-user" />
        {' '}
        Welcome
        {' '}
        {user && [user.user.role, ' ', user.user.username]}

      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <ListExp experience={profile.experience} />
          <ListEdu education={profile.education} />
        </>
      )
        : (
          user.user.role === 'Mentee'
            ? (
              <>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to="/create-mentee-profile" className="btn btn-primary my-1">
                  Create Profile
                </Link>
              </>
            ) : user.user.role === 'Partner' ? (
              <>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to="/create-partner-profile" className="btn btn-primary my-1">
                    Create Profile
                </Link>
              </>
            )
              : (
                <>
                  <p>You have not yet setup a profile, please add some info</p>
                  <Link to="/create-mentor-profile" className="btn btn-primary my-1">
                  Create Profile
                  </Link>
                </>
              )
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
