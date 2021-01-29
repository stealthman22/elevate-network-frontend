import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getMenteeProfileById, getMentorProfileById, getPartnerProfileById } from '../../../redux/actions/profile';

const Profile = ({
  getMenteeProfileById,
  // getPartnerProfileById,
  // getMentorProfileById,
  profile: {
    profile,
    loading,
  },
  auth,
  match,
}) => {
  useEffect(() => {
    getMenteeProfileById(match.params.id);
    // getMentorProfileById(match.params.id);
    // getPartnerProfileById(match.params.id);
  }, [getMenteeProfileById]);

  return (
    <>
      {loading ? <Spinner /> : profile !== null ? (
        <>
      I got the profile
        </>
      ) : (
        <>
Aww crap something went wrong
        </>
      )}

    </>

  );
};

Profile.propTypes = {
  getMenteeProfileById: PropTypes.func.isRequired,
  // getMentorProfileById: PropTypes.func.isRequired,
  // getPartnerProfileById: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMenteeProfileById })(Profile);
