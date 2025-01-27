import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in based on token
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage to log the user out
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to root path ('/') after logout
  };

  const handleLoginClick = () => {
    // Redirect to login page if not logged in
    if (!isLoggedIn) {
      navigate('/login');
    }
  };

  // Block access to /login if the user is logged in
  useEffect(() => {
    if (isLoggedIn && window.location.pathname === '/login') {
      navigate('/home'); // Redirect to home if trying to access login while logged in
    }
  }, [isLoggedIn, navigate]);

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>MyLogo</Link>
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/home" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </li>
          <li style={styles.navItem}>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                style={{ ...styles.navLink, ...styles.logoutButton }}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                style={{ ...styles.navLink, ...styles.loginButton }}
              >
                Login
              </button>
            )}
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
    height: '70px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    padding: '0 20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
  },
  logo: {
    fontSize: '2rem',
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
    margin: '0 25px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  loginButton: {
    backgroundColor: '#28a745',
    padding: '8px 20px',
    borderRadius: '5px',
    fontWeight: '700',
    transition: 'background-color 0.3s ease',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: '8px 20px',
    borderRadius: '5px',
    fontWeight: '700',
    transition: 'background-color 0.3s ease',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Header;
