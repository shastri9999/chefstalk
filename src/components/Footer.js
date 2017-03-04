import React from 'react';
import { Link } from 'react-router';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Navigation</h3>
        <Link to="/unkown">Jobs</Link>
        <Link to="/unkown">Chefs Login</Link>
        <Link to="/unkown">Business Login</Link>
      </div>
      <div className="links">
        <h3>Job Board</h3>
        <Link to="/unkown">About</Link>
        <Link to="/unkown">FAQ</Link>
        <Link to="/terms">Terms</Link>
      </div>
      <div className="links">
        <h3>Business</h3>
        <Link to="/unkown">Employer</Link>
        <Link to="/unkown">Plans and Pricing</Link>
      </div>
      <div className="links">
        <h3>Connect</h3>
        <Link to="/unkown">Facebook</Link>
        <Link to="/unkown">Twitter</Link>
        <Link to="/unkown">Pinterest</Link>
        <Link to="/unkown">Instagram</Link>
        <Link className="country" href="/unkown">Country <span className="dropdown">▼</span></Link>
        <Link to="/unkown">Language <span className="dropdown">▼</span></Link>
      </div>
      <div className="copyright">© 2017 CHEFSTALK All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
