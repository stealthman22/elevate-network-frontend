import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getMenteeProfileById } from '../../../redux/actions/profile';

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
  }, [getMenteeProfileById]);

  return (
    <>
      {loading ? <Spinner /> : (
        <>
      I got the profile
        </>
      ) }
      <p>
        {' '}
        <Link to="/mentee-profiles" className="btn btn-light"> Back to profiles</Link>
      </p>
    </>

  );
};

MentorProfile.propTypes = {
  getMenteeProfileById: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMenteeProfileById })(MentorProfile);
