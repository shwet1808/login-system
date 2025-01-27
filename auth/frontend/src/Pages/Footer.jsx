import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>MyLogo</Link>
        </div>
        <div style={styles.links}>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <Link to="/about" style={styles.link}>About</Link>
            </li>
            <li style={styles.linkItem}>
              <Link to="/contact" style={styles.link}>Contact</Link>
            </li>
            <li style={styles.linkItem}>
              <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div style={styles.socials}>
          <a href="#" style={styles.socialIcon}>FB</a>
          <a href="#" style={styles.socialIcon}>TW</a>
          <a href="#" style={styles.socialIcon}>IG</a>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>© 2025 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Inline CSS styles for Footer
const styles = {
  footer: {
    backgroundColor: '#333', // Dark background
    color: '#fff', // White text for contrast
    padding: '40px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: '700',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
    letterSpacing: '1px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  linkItem: {
    margin: '0 15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#f39c12', // Gold color on hover
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
  },
  socialIcon: {
    margin: '0 10px',
    color: '#fff',
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerBottom: {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '20px',
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#bbb',
  },
};

export default Footer;
