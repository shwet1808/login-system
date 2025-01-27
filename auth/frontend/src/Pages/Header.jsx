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
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark transparent background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // More pronounced shadow
    zIndex: 1000,
    padding: '10px 0', // Padding for better spacing
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px', // Max width for better alignment
    margin: '0 auto', // Centering the nav
    padding: '0 20px',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#fff',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
    letterSpacing: '1px', // Slight spacing for logo text
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff', // White text for better contrast
    fontSize: '1.1rem',
    fontWeight: '600',
    textTransform: 'uppercase', // Uppercase links for a sleek design
    letterSpacing: '0.5px',
    transition: 'color 0.3s ease, transform 0.3s ease', // Smooth hover transitions
  },
  navLinkHover: {
    color: '#f39c12', // Gold color on hover
    transform: 'scale(1.1)', // Slight zoom effect on hover
  },
};

export default Header;
