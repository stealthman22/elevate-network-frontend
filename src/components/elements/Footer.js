import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer-ctn">
    <div className="footer-card">
      <div className="footer-content">
        <div className="cta text-center">
         Never miss out on what Elevate is doing:

          {' '}
          <Link to="/register"><span className="btn btn-primary"> Register Now</span></Link>

        </div>
        <div className="smb">
          <span className="ml">Follow us on social media:</span>
          <br />
          <div className="smb-icons">

            <a href="https://twitter.com/elevatenetwork1" target="_blank" rel="noreferrer" className="smb-icon">
              <i className="fab fa-twitter-square fa-3x " />
              <p> Twitter</p>
            </a>

            <a href="https://instagram.com/elevatenetworkhq/" target="_blank" rel="noreferrer" className="smb-icon">
              {' '}
              <i className="fab fa-instagram-square fa-3x " />
              <p>Instagram</p>
            </a>

            {' '}
            <a href="https://linkedin.com/company/elevatenetwork/" target="_blank" rel="noreferrer" className="smb-icon">
              {' '}
              <i className="fab fa-linkedin fa-3x " />
              <p>Linkedin</p>
            </a>

          </div>
        </div>
        <div className="contact">
          <span className="ml">
For enquiries mail or call us @:
          </span>

          <br />
          <div className="mail-icons">
            <a href="mailto:info@elevatenetworkhq.com" target="_blank" rel="noreferrer" className="mail-icon">
              <i className="fas fa-paper-plane fa-2x" />
              <p>Info</p>
            </a>

            <a href="mailto:partnerships@elevatenetworkhq.com" target="_blank" rel="noreferrer" className="mail-icon">
              <i className="fas fa-envelope-open-text fa-2x" />
              <p>Partnerships</p>
            </a>

            <a href="mailto:admin@elevatenetworkhq.com" target="_blank" rel="noreferrer" className="mail-icon">
              {' '}
              <i className="fas fa-inbox fa-2x" />
              {' '}
              <p> Admin</p>
            </a>
            <a href="tel: +233508800813" target="_blank" rel="noreferrer" className="mail-icon">
              {' '}
              <i className="fas fa-phone fa-2x" />
              {' '}
              <p> Call</p>
            </a>
          </div>
        </div>
        <p>
          {' '}
          <i className="far fa-copyright copy"> Elevate Network 2021</i>
        </p>
      </div>

    </div>

  </footer>
);

export default Footer;
