import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteEdu } from '../../redux/actions/profile';

const ListEdu = ({ education, deleteEdu }) => {
  const educations = education.map((edu) => (
    <>
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td className="hide-sm">{edu.fieldOfStudy}</td>
        <td>
          {formatDate(edu.from)}
          {' '}
-
          {' '}
          {edu.to ? formatDate(edu.to) : 'Now'}
        </td>
      </tr>
      <td>
        <button onClick={() => deleteEdu(edu._id)} type="button" className="btn btn-danger">Delete</button>
      </td>
    </>
  ));
  return (
    <>
      <h2 className="my3">Education Highlights</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Institution</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Field of Study</th>
            <th className="hide-sm">Years</th>

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
