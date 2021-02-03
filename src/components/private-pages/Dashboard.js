import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount, getCurrentProfile } from '../../redux/actions/profile';
import Spinner from '../elements/Spinner';
import DashboardActions from './DashboardActions';
import ListExp from './ListExp';
import ListEdu from './ListEdu';
// import dashImg from '../../assets/undraw_career_development_oqcb.svg';
// import CreateMenteeProfile from './profile-forms/CreateMenteeProfile';
// import CreateMentorProfile from './profile-forms/CreateMentorProfile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  profile: { profile, loading },
  auth: {
    user,
  },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  // const onClick = () => {
  //   if (user.user.role === 'Mentee') {
  //     return CreateMenteeProfile;
  //   }
  //   return CreateMentorProfile;
  // };

  return loading && profile === null ? <Spinner /> : (
    <>
      <div className="dashboard-ctn">
        <h1 className="large text-primary text-center">
        Dashboard
        </h1>
        <p className="lead text-center">
          <i className="fa fa-user" />
          {' '}
        Welcome
          {' '}
          {user.user ? [user.user.role, ' ', user.user.username] : ' '}
        </p>
        {profile !== null ? (
          user.user.role === 'Mentee' ? (
            <>
              <div className="dashboard-wrapper">
                <DashboardActions />

                <ListEdu education={profile.education} />

                <div className="my-2 ml">
                  <button onClick={() => deleteAccount()} type="button" className="btn btn-danger">
                    <i className="fas fa-user-minus" />
                    {' '}
                    <span>Delete Account </span>
                  </button>
                </div>

              </div>
            </>
          ) : (
            <>
              <div className="dashboard-wrapper">
                <DashboardActions />
                <ListExp experience={profile.experience} />
                <ListEdu education={profile.education} />

                <div className="my-2 ml">
                  <button onClick={() => deleteAccount} type="button" className="btn btn-danger">
                    <i className="fas fa-user-minus" />
                    {' '}
                Delete Account
                  </button>
                </div>

              </div>
            </>
          )

        )
          : (
            user.user.role === 'Mentee'
              ? (
                <>
                  <div className="text-center">
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to="/create-mentee-profile" className="btn btn-primary my-1">
                  Create Profile
                    </Link>
                    <div className="mentee-welcome" />
                  </div>
                </>
              ) : user.user.role === 'Partner' ? (
                <>
                  <div className="text-center">
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to="/create-partner-profile" className="btn btn-primary my-1">
                    Create Profile
                    </Link>
                    <div className="partner-welcome" />
                  </div>
                </>
              )
                : (
                  <>
                    <div className="text-center">
                      <p>You have not yet setup a profile, please add some info</p>
                      <Link to="/create-mentor-profile" className="btn btn-primary my-1">
                  Create Profile
                      </Link>
                      <div className="mentor-welcome" />
                    </div>
                  </>
                )
          )}
      </div>
    </>
  );
};

Dashboard.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
