import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getMentorProfileById } from '../../../redux/actions/profile';

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
  }, [getMentorProfileById]);

  return (
    <>
      {loading ? <Spinner /> : (
        <>
I got the profile
        </>
      ) }
      <p>
        {' '}
        <Link to="/mentor-profiles" className="btn btn-light"> Back to profiles</Link>
      </p>
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
