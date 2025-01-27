import React from 'react';
import { Link } from 'react-router-dom';

const IntroPage = () => {
  return (
    <div style={styles.introPage}>
      {/* Background Video */}
      <video autoPlay loop muted style={styles.video}>
        <source src="https://cdn.pixabay.com/video/2015/08/08/156-135737598_tiny.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div style={styles.overlay}>
        <div style={styles.introContent}>
          <h1 style={styles.heading}>Welcome to Our Website!</h1>
          <p style={styles.paragraph}>Discover something new with us. Learn more or get in touch.</p>
          <div style={styles.introButtons}>
            <Link to="/about" style={{ ...styles.button, backgroundColor: '#0056b3' }}>
              Learn More
            </Link>
            <Link to="/contact" style={{ ...styles.button, backgroundColor: '#28a745' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  introPage: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
  
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introContent: {
    textAlign: 'center',
    // background: 'rgba(255, 255, 255, 0.7)',
    background: 'rgba(247, 229, 229, 0.5)',
    backdropFilter: 'blur(8px)',
    padding: '50px 40px',
    borderRadius: '20px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
    animation: 'fadeIn 1.2s ease-out',
    maxWidth: '600px',
    width: '100%',
  },
  heading: {
    fontSize: '2.8rem',
    color: '#222',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#444',
    marginBottom: '30px',
    lineHeight: '1.5',
  },
  introButtons: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
  },
  button: {
    padding: '14px 28px',
    fontSize: '1.2rem',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '40px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
  },
};

const stylesWithAnimations = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .button:hover {
    background-color: #0069d9;
    transform: translateY(-3px);
  }

  .button:active {
    transform: translateY(1px);
  }
`;

export const GlobalStyles = () => {
  return <style>{stylesWithAnimations}</style>;
};

export default IntroPage;
