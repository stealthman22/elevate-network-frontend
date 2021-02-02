import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExp } from '../../redux/actions/profile';
import formatDate from '../../utils/formatDate';

const ListExp = ({ experience, deleteExp }) => {
  const experiences = experience.map((exp) => (
    <>
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td className="hide-sm">
          {formatDate(exp.from)}
          {' '}
          <span>-</span>
          {' '}
          {exp.to ? formatDate(exp.to) : 'Now'}
        </td>
        <td>
          <button type="button" onClick={() => deleteExp(exp._id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>

    </>
  ));
  return (
    <>
      <h2 className="my-2">Experience Highlights</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

ListExp.propTypes = {
  experience: PropTypes.shape([]).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

export default connect(null, { deleteExp })(ListExp);
