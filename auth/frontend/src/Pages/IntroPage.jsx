import React from 'react';
import { Link } from 'react-router-dom';

const IntroPage = () => {
  return (
    <div style={styles.introPage}>
      <div style={styles.introContent}>
        <h1 style={styles.heading}>Welcome to Our Website!</h1>
        <p style={styles.paragraph}>Your journey starts here. Learn more about us or get in touch.</p>
        <div style={styles.introButtons}>
          <Link to="/about" style={{ ...styles.button, backgroundColor: '#007bff' }}>Learn More About Us</Link>
          <Link to="/login" style={{ ...styles.button, backgroundColor: '#28a745' }}>Login</Link>
        </div>
      </div>
    </div>
  );
};

// Inline styles as a JavaScript object
const styles = {

  
  introPage: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmp3HAcaRU357YwZqm0g5Cq4AoF4No_OW7w&s')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,
    overflowY: 'hidden',
  },
  introContent: {
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  introButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
};

export default IntroPage;
