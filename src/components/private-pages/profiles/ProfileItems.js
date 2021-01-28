import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//  change prop role to avatar
const ProfileItems = ({
  profile: {
    user: {
      _id, username, role, avatar,
    },
    location,
    aboutMe,
    skills,
  },
}) => (
  <>
    <div className="profile bg-light">
      <img src={avatar && <span>{avatar}</span>} alt="" className="round-img" />
    </div>
    <div>
      <h2>{username}</h2>
      <h2>{role}</h2>
      <p className="my-1">{location && <span>{location}</span>}</p>
      <p>{aboutMe && <span>{aboutMe}</span>}</p>
      <Link to={`/profile/${_id}`}>View Profile</Link>
    </div>
    <ul>
      {skills.slice(0, 4).map((skill, index) => (
        <li key={index} className="text-primary">
          <i className="fas fa-check" />
          {skill}
        </li>
      ))}
    </ul>
  </>
);
ProfileItems.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired,
    skills: PropTypes.shape([]).isRequired,
  }).isRequired,
};

export default ProfileItems;
