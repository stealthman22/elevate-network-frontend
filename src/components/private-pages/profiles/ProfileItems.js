import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//  change prop role to avatar
const ProfileItems = ({
  profile: {
    user: {
      _id, username,
      role, avatar,
    },
    bio: {
      aboutMe,
      location,

    },
    interests: {
      skills,
    },

  },
}) => (
  <>
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>
          {role}
          {' '}
          {username}
        </h2>
        <p>{aboutMe}</p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`mentee-profile/${_id}`} className="btn btn-primary">
    View Profile
        </Link>
      </div>
      <ul>
        { skills && skills.slice(0, 3).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </>
);
ProfileItems.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.shape({}),
    bio: PropTypes.shape({}),
    interests: PropTypes.shape({}),
  }).isRequired,
};
export default ProfileItems;
