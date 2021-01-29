import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../elements/Spinner';
import { getPartnerProfileById } from '../../../redux/actions/profile';

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
  }, [getPartnerProfileById]);

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
