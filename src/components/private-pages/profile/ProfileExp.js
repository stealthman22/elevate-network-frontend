import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';

const ProfileExp = ({
  experience: {
    company, title, location, from, to, current, description,
  },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      {' '}
      {formatDate(from)}
      {' '}
      <span>-</span>
      {' '}
      {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Position</strong>
      {title}
    </p>
    <p>
      <strong>Description</strong>
      {description}
    </p>
  </div>
);

ProfileExp.propTypes = {
  experience: PropTypes.shape([]).isRequired,
};

export default ProfileExp;
