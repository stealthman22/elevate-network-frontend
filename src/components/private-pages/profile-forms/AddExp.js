import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExp } from '../../../redux/actions/profile';

const AddEdu = ({ addExp, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    from: '',
    to: '',
    current: false,
    description: '',
    location: '',
  });

  // disable to if current is checked
  const [toDataDisabled, toggleDisabled] = useState(false);

  const {
    title,
    company,
    from,
    to,
    current,
    description,
    location,
  } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <div className="container">
        <h1 className="large text-primary">
       Add An Experience
        </h1>
        <p className="lead">
          <i className="fas fa-briefcase" />
          {' '}
        Add any work Experience you&apos;ve had in the past,
        volunteering also counts.

        </p>
        <small>* = required field</small>
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExp(formData, history);
        }}
      >
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title" value={title} onChange={(e) => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" value={company} onChange={(e) => onChange(e)} required />
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
Current Job
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
            placeholder="Job Description"
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/dashboard" className="btn btn-light my-1">Go Back</Link>
      </form>
    </>
  );
};

AddEdu.propTypes = {
  addExp: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect(null, { addExp })(withRouter(AddEdu));
