import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
          <a href="https://www.facebook.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
          </a>
          <a href="https://twitter.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="https://www.instagram.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="https://www.linkedin.com" style={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
          </a>
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
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: '700',
    marginBottom: '10px',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
    letterSpacing: '1px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
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
    paddingTop: '10px',
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#bbb',
  },
  // Media queries for responsiveness
  '@media (max-width: 768px)': {
    footer: {
      padding: '15px 0',
    },
    logo: {
      fontSize: '1.4rem',
    },
    link: {
      fontSize: '0.9rem',
    },
    socialIcon: {
      fontSize: '1.2rem',
    },
    footerText: {
      fontSize: '0.8rem',
    },
  },
};

export default Footer;
