import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEdu } from '../../../redux/actions/profile';

const AddEdu = ({ addEdu, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  // disable to if current is checked
  const [toDataDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldOfStudy,
    location,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <div className="container">
        <h1 className="large text-primary">
       Add Your Education
        </h1>
        <p className="lead">
          <i className="fas fa-user-graduate" />
          {' '}
        Add any School or Certification course you&apos;ve attended in the past,

        </p>
        <small>* = required field</small>
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEdu(formData, history);
        }}
      >
        <div className="form-group">
          <input type="text" placeholder="* Institution" name="school" value={school} onChange={(e) => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Degree or Cert Awarded" name="degree" value={degree} onChange={(e) => onChange(e)} required />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Field of Study"
            name="fieldOfStudy"
            value={fieldOfStudy}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => onChange(e)} />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={(e) => onChange(e)} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDataDisabled);
              }}
            />
            {' '}
Current Institution
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={(e) => onChange(e)} disabled={toDataDisabled ? 'disabled' : ''} />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
            cols="30"
            rows="5"
            placeholder="Program  Description"
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/dashboard" className="btn btn-light my-1">Go Back</Link>
      </form>

    </>
  );
};

AddEdu.propTypes = {
  addEdu: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect(null, { addEdu })(withRouter(AddEdu));
