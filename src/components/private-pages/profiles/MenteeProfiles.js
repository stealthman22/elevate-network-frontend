import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../elements/Spinner';
import ProfileItems from './ProfileItems';
import { getMenteeProfiles } from '../../../redux/actions/profile';

const MenteeProfiles = ({
  getMenteeProfiles,
  profile: { profiles, loading },
}) => {
  useEffect(() => {
    getMenteeProfiles();
  }, [getMenteeProfiles]);

  return (
    <>
      {
        loading ? <Spinner /> : (
          <>
            <div className="container">
              <h1 className="large text-primary">Mentee Profiles</h1>
              <p className="lead">
                <i className="fab fa-users" />
                {' '}
                <span> See the Mentees in this amazing community, and connect</span>
              </p>
              <div className="profiles">
                {profiles.length > 0 ? (
                  profiles.map((profile) => (
                    <ProfileItems key={profile._id} profile={profile} />
                  ))
                ) : <h4>No profiles found</h4>}
              </div>
            </div>
          </>

        )
      }
    </>

  );
};

MenteeProfiles.propTypes = {
  getMenteeProfiles: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    loading: PropTypes.bool,
    profiles: PropTypes.shape([]),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getMenteeProfiles })(MenteeProfiles);
