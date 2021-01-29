import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getMentorProfileById } from '../../../redux/actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExp from './ProfileExp';

const MentorProfile = ({
  getMentorProfileById,
  profile: {
    profile,
    loading,
  },
  auth,
  match,
}) => {
  useEffect(() => {
    getMentorProfileById(match.params.id);
  }, [getMentorProfileById, match.params.id]);

  return (
    <>
      {loading ? <Spinner /> : (
        <>
          <p>
            {' '}
            <Link to="/mentor-profiles" className="btn btn-light"> Back to profiles</Link>
          </p>
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Experience</h2>
              {profile.experience && profile.experience.length > 0 ? (
                <>
                  {profile.experience.map((experience) => (
                    <ProfileExp key={experience._id} experience={experience} />
                  ))}
                </>
              ) : (<h4>No Experience Credentials </h4>)}
            </div>
          </div>
        </>
      ) }

      {/* {auth.isAuthenticated
      && auth.loading === false
      && auth.user.user._id === profile.user._id
      && (
        <Link
          to="/edit-profile"
          className="btn btn-dark"
        >
          <span>Edit Profile</span>
        </Link>
      )} */}

    </>

  );
};

MentorProfile.propTypes = {
  getMentorProfileById: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMentorProfileById })(MentorProfile);
