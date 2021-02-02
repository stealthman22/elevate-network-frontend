import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteEdu } from '../../redux/actions/profile';

const ListEdu = ({ education, deleteEdu }) => {
  const educations = education.map((edu) => (
    <>
      <tr key={edu._id}>
        <td>{edu.fieldOfStudy}</td>
        <td className="hide-sm">{edu.school}</td>
        <td className="hide-sm">
          {formatDate(edu.from)}
          {' '}
          <span>-</span>
          {' '}
          {edu.to ? formatDate(edu.to) : 'Now'}
        </td>
        <td>
          <button onClick={() => deleteEdu(edu._id)} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>

    </>
  ));
  return (
    <>
      <h2 className="my-2">Education Highlights</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Field Of Study</th>
            <th className="hide-sm"> School</th>
            <th className="hide-sm">Years</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

ListEdu.propTypes = {
  education: PropTypes.shape([]).isRequired,
  deleteEdu: PropTypes.func.isRequired,

};

export default connect(null, { deleteEdu })(ListEdu);
