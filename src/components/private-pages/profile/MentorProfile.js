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

MentorProfile.propTypes = {
  getMentorProfileById: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMentorProfileById })(MentorProfile);
