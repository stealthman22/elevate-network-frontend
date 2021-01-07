import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = () => {
  const [formData, setformData] = useState({
    fullName: '',
    age: '',
    aboutMe: '',
    location: '',
    dob: '',
    profilePic: '',
    skills: '',
    learningInterests: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    fullName,
    age,
    aboutMe,
    location,
    // dob,
    skills,
    learningInterests,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = formData;

  const onChange = (e) => setformData({ ...formData, [e.target.name]: e.target.value });

  return (

    <>
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
        Let&apos;s get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={(e) => onChange(e)} />
          <small className="form-text">
            Please tell us your full name
          </small>
        </div>
        <div className="form-group">
          <input type="number" placeholder="Must be between 14 to 24" name="age " min="14" max="24" value={age} onChange={(e) => onChange(e)} />
          <small className="form-text">
            Could be your own or a company website

          </small>
        </div>

        <div className="form-group">
          <textarea placeholder="A captivating bio of yourself" name="aboutMe" value={aboutMe} onChange={(e) => onChange(e)} />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => onChange(e)} />
          <small className="form-text">
            City & Country you live (eg. Accra, Ghana)

          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Skills" name="skills" value={skills} onChange={(e) => onChange(e)} />
          <small className="form-text">
            Please use comma separated values (eg.
            Arts, Sports, Fishing)
          </small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="What would you be interested in learning" name="learningInterests" value={learningInterests} onChange={(e) => onChange(e)} />
          <small className="form-text">
            Please use comma separated values (eg.
            Arts, Sports, Fishing)
          </small>
        </div>

        <div className="my-2">
          <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} />
            </div>
          </>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </>
  );
};
CreateProfile.propTypes = {

};

export default CreateProfile;
