import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <div className="cta-ctn">
    <p className="lead">

      <Link to="/register" className="btn btn-primary"> JOIN US</Link>
now and enjoy every benefit of this  unique community.
    </p>
  </div>
);

export default CallToAction;
