import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Elevate Logo.svg';

const Logo = () => (
  <div className="logo-ctn">
    <Link to="/">
      <img className="logo" src={logo} alt="" />
    </Link>

  </div>
);

export default Logo;
