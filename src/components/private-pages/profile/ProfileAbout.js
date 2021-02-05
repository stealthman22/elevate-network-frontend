import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    user: {
      username,
      role,
    },
    bio: {
      aboutMe,
    },
    interests,

  },

}) => (
  <div className="profile-about bg-light p-2">
    {aboutMe && (
      <>
        <h2 className="text-primary">
          {username}
          <span>&apos;s Bio </span>
        </h2>
        <p>
          {aboutMe}
        </p>
        <div className="line" />
      </>
    ) }

    <h2 className="text-primary">Skill Set</h2>
    <div className="skills">
      {interests.skills.map((skill, index) => (
        <div key={index} className="p-1">
          <i className="fa fa-check" />
          {' '}
          {skill}
        </div>
      ))}
    </div>

    {role === 'Mentee' ? (
      <>
        <h2 className="text-primary">Learning Interests</h2>
        <div className="skills">
          {interests.learningInterests.map((learningInterest, index) => (
            <div key={index} className="p-1">
              <i className="fa fa-check" />
              {' '}
              {learningInterest}
            </div>
          ))}
        </div>
      </>
    ) : role === 'Mentor' ? (
      <>
        <h2 className="text-primary">Teaching Interests</h2>
        <div className="skills">
          {interests.teachingInterests.map((teachingInterest, index) => (
            <div key={index} className="p-1">
              <i className="fa fa-check" />
              {' '}
              {teachingInterest}
            </div>
          ))}
        </div>
      </>
    ) : (
      <>
        <h2 className="text-primary">Sponsoring Interests</h2>
        <div className="skills">
          {interests.sponsoringInterests.map((sponsoringInterest, index) => (
            <div key={index} className="p-1">
              <i className="fa fa-check" />
              {' '}
              {sponsoringInterest}
            </div>
          ))}
        </div>
      </>
    ) }

  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.shape({}).isRequired,
};

export default ProfileAbout;
