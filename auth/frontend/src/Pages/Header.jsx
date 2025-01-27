import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>MyLogo</Link>
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/login" style={{ ...styles.navLink, ...styles.loginButton }}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Inline CSS styles for professional look
const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '70px', // Increased height for more space
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker transparent background for better contrast
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Stronger shadow for a more polished look
    zIndex: 1000,
    padding: '0 20px', // Added padding for better spacing
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px', // Max width for better alignment
    margin: '0 auto', // Centering the nav
    height: '100%',
  },
  logo: {
    fontSize: '2rem', // Increased font size for better visibility
    fontWeight: '700',
    color: '#fff',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
    letterSpacing: '1px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 25px', // Added more space between items
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.2rem', // Slightly larger text for readability
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px', // Increased spacing for sleek design
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  navLinkHover: {
    color: '#f39c12', // Gold color on hover
    transform: 'scale(1.1)', // Slight zoom effect on hover
  },
  loginButton: {
    backgroundColor: '#28a745', // Green background for the login button
    padding: '8px 20px', // Added padding for a button-like appearance
    borderRadius: '5px', // Rounded corners for the button
    fontWeight: '700', // Make the text bold for emphasis
    transition: 'background-color 0.3s ease', // Smooth background color transition
  },
  loginButtonHover: {
    backgroundColor: '#218838', // Darker green on hover
  },
};

export default Header;
