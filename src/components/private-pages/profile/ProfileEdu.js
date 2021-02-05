import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';

const ProfileEdu = ({
  education: {
    school, degree, fieldOfStudy,
    location, from, to, description,
  },
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <h4 className="text-dark">{location}</h4>
    <p>
      {' '}
      {formatDate(from)}
      {' '}
      <span>-</span>
      {' '}
      {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Degree </strong>
      {' '}
      {' '}
      {degree}
    </p>
    <p>
      <strong>Field of Study</strong>
      {' '}
      {' '}
      {fieldOfStudy}
    </p>
    <p>
      <strong>Description</strong>
      {' '}
      {' '}
      {description}
    </p>
  </div>
);

ProfileEdu.propTypes = {
  education: PropTypes.shape([]).isRequired,
};

export default ProfileEdu;
