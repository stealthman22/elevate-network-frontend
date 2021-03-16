import React, { Fragment, useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleProfile, getCurrentProfile } from '../../../redux/actions/profile';

const EditMenteeProfile = ({
  profile: { profile, loading },
  handleProfile,
  getCurrentProfile,
  history,
}) => {
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
  const [url, setUrl] = useState('');

  useEffect(() => {
    getCurrentProfile();
    // fill form with current values
    setformData(

      {
        fullName: loading || !profile.bio.fullName ? '' : profile.bio.fullName,
        age: loading || !profile.bio.age ? '' : profile.bio.age,
        aboutMe: loading || !profile.bio.aboutMe ? '' : profile.bio.aboutMe,
        location: loading || !profile.bio.location ? '' : profile.bio.location,
        dob: loading || !profile.bio.dob ? '' : profile.bio.dob,
        profilePic: loading || !profile.profilePic ? '' : profile.profilePic,
        skills: loading || !profile.interests.skills ? '' : profile.interests.skills.join(','),
        learningInterests: loading || !profile.interests.learningInterests ? '' : profile.interests.learningInterests.join(','),
        youtube: loading || !profile.social ? '' : profile.social.youtube,
        facebook: loading || !profile.social ? '' : profile.social.facebook,
        twitter: loading || !profile.social ? '' : profile.social.twitter,
        instagram: loading || !profile.social ? '' : profile.social.instagram,
        linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      },
    );
  }, [loading, getCurrentProfile]);

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
    profilePic,
  } = formData;

  const onChange = (e) => setformData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    handleProfile(formData, history);
  };

  const picDetails = () => {
    const data = new FormData();
    data.append('file', url);
    data.append('upload_preset', 'elevate-site-profile-pic');
    data.append('cloud_name', 'elevatenetworkhq-com');
    fetch('https://api.cloudinary.com/v1_1/elevatenetworkhq-com/image/upload/', {
      method: 'post',
      body: data,

    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <>
      <div className="container">
        <h1 className="large text-primary">
        Edit Your Profile
        </h1>
        <p className="lead">
          <i className="fas fa-user" />
          {' '}
        Let&apos;s get some information to make your
        profile stand out
        </p>
        <small>* = required field</small>
      </div>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <small className="form-text">
            Please tell us your full name
          </small>
          <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={(e) => onChange(e)} />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Age" name="age" min="14" max="24" value={age} onChange={(e) => onChange(e)} />
          <small className="form-text">
            Please age ust be between 14 to 24

          </small>
        </div>

        <div className="form-group">
          <small className="form-text">Tell us a little about yourself</small>
          <textarea placeholder="A captivating bio of yourself" name="aboutMe" value={aboutMe} onChange={(e) => onChange(e)} />
        </div>

        <div className="form-group">
          <small className="form-text">
            City & Country you live (eg. Accra, Ghana)
          </small>
          <input type="text" placeholder="Location" name="location" value={location} onChange={(e) => onChange(e)} />
        </div>
        <div className="form-group">
          <small className="form-text">
            Please use comma separated values (eg.
            Arts, Sports, Fishing)
          </small>
          <input type="text" placeholder="Skills" name="skills" value={skills} onChange={(e) => onChange(e)} />
        </div>

        <div className="form-group">
          <small className="form-text">
            Please use comma separated values (eg.
            Arts, Sports, Fishing)
          </small>
          <input
            type="text"
            placeholder="What would you be interested in learning"
            name="learningInterests"
            value={learningInterests}
            onChange={(e) => onChange(e)}
          />
        </div>

        {/* profile picture */}
        <div className="form-group">
          <small>upload your profile photo</small>
          <input
            type="file"
            name="Upload Photo"
            onChange={(e) => setUrl(e.target.files[0])}
          />
          <button className="styles.btn" type="button" onClick={() => picDetails()}>Upload</button>
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
              <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={(e) => onChange(e)} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={(e) => onChange(e)} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input type="text" placeholder="youtube URL" name="youtube" value={youtube} onChange={(e) => onChange(e)} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={(e) => onChange(e)} />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={(e) => onChange(e)} />
            </div>
          </>
        )}

        <input type="submit" className="btn btn-primary my-1" value="Submit" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>

    </>
  );
};

EditMenteeProfile.propTypes = {
  handleProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    loading: PropTypes.func,
    profile: PropTypes.func,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  handleProfile,
  getCurrentProfile,
})(withRouter(EditMenteeProfile));
