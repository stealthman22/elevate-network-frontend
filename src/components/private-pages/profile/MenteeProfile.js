import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getMenteeProfileById } from '../../../redux/actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';

const MentorProfile = ({
  getMenteeProfileById,
  profile: {
    profile,
    loading,
  },
  auth,
  match,
}) => {
  useEffect(() => {
    getMenteeProfileById(match.params.id);
  }, [getMenteeProfileById], match.params.id);

  return (
    <>
      {loading ? <Spinner /> : (
        <>
          <p>
            {' '}
            <Link to="/mentee-profiles" className="btn btn-light"> Back to profiles</Link>
          </p>
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />

          </div>
        </>
      ) }
    </>

  );
};

MentorProfile.propTypes = {
  getMenteeProfileById: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,

};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMenteeProfileById })(MentorProfile);
