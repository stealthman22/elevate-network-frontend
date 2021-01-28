import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../elements/Spinner';
import ProfileItems from './ProfileItems';
import { getProfiles } from '../../../redux/actions/profile';

const Profiles = ({
  getProfiles,
  profile: { profiles, loading },
}) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <>
      {
        loading ? <Spinner /> : (
          <>
            <h1 className="large text-primary">Profiles</h1>
            <p className="lead">
              <i className="fab fa-users" />
              {' '}
  See who else is in this amazing community, and connect
            </p>
            <div className="profiles">
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItems key={profile._id} profile={profile} />
                ))
              ) : <h4>No profiles found</h4>}
            </div>
          </>
        )
      }
    </>

  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profiles: PropTypes.shape([]),
    loading: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
