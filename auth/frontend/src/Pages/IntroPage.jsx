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
          <Link to="/contact" style={{ ...styles.button, backgroundColor: '#28a745' }}>Contact Us</Link>
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
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmp3HAcaRU357YwZqm0g5Cq4AoF4No_OW7w&s")',
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
    animation: 'fadeIn 1s ease-out',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    animation: 'fadeInText 2s ease-out',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
    opacity: 0,
    animation: 'fadeInText 2s ease-out 0.5s forwards',
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

const stylesWithAnimations = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .button:hover {
    background-color: #0056b3;
  }
`;

export const GlobalStyles = () => {
  return <style>{stylesWithAnimations}</style>;
};

export default IntroPage;
