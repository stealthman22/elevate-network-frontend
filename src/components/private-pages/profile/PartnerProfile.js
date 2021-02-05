import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getPartnerProfileById } from '../../../redux/actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExp from './ProfileExp';
import ProfileEdu from './ProfileEdu';

const PartnerProfile = ({
  getPartnerProfileById,
  profile: {
    profile,
    loading,
  },
  auth,
  match,
}) => {
  useEffect(() => {
    getPartnerProfileById(match.params.id);
  }, [getPartnerProfileById, match.params.id]);

  return (
    <>
      {loading ? <Spinner /> : (
        <>
          <div className="container">
            <p>
              {' '}
              <Link to="/partner-profiles" className="btn btn-light"> Back to profiles</Link>
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
              <div className="profile-edu bg-white p-2">
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

PartnerProfile.propTypes = {
  getPartnerProfileById: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPartnerProfileById })(PartnerProfile);
