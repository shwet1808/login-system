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
    padding: '20px 0', // Reduced padding for a compact footer
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    width: '100%', // Full width
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: '700',
    marginBottom: '10px', // Space between logo and links on small screens
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
    letterSpacing: '1px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px', // Space between links and social icons
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
    paddingTop: '10px', // Reduced padding for compact footer
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#bbb',
  },
  // Media queries for responsiveness
  '@media (max-width: 768px)': {
    footer: {
      padding: '15px 0', // Further reduce padding on smaller screens
    },
    logo: {
      fontSize: '1.4rem', // Smaller logo font size on mobile
    },
    link: {
      fontSize: '0.9rem', // Smaller font size for links on mobile
    },
    socialIcon: {
      fontSize: '1.2rem', // Smaller social icon font size
    },
    footerText: {
      fontSize: '0.8rem', // Smaller footer text on mobile
    },
  },
};

export default Footer;
