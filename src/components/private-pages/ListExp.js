import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';

const ListExp = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <>
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td>
          {formatDate(exp.from)}
          {' '}
-
          {' '}
          {exp.to ? formatDate(exp.to) : 'Now'}
        </td>
      </tr>
      <td>
        <button type="button" className="btn btn-danger">Delete</button>
      </td>
    </>
  ));
  return (
    <>
      <h2 className="my3">Experience Highlights</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>

          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

ListExp.propTypes = {
  experience: PropTypes.shape([]).isRequired,

};

export default ListExp;
