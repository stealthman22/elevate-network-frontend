import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getMenteeProfileById } from '../../../redux/actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileEdu from './ProfileEdu';

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
          <div className="container">
            <p>
              {' '}
              <Link to="/mentee-profiles" className="btn btn-light"> Back to profiles</Link>
            </p>
            <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
              <div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Education</h2>
                {profile.education && profile.education.length > 0 ? (
                  <>
                    {profile.education.map((education) => (
                      <ProfileEdu key={education._id} education={education} />
                    ))}
                  </>
                ) : (<h4>No Education Credentials </h4>)}
              </div>
            </div>
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
