import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div style={styles.aboutPage}>
      <div style={styles.aboutContent}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.description}>We are a passionate team dedicated to providing exceptional services and creating amazing experiences for our users.</p>
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Innovation</h3>
            <p style={styles.featureDescription}>We focus on innovative solutions that drive success.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Collaboration</h3>
            <p style={styles.featureDescription}>We believe in the power of teamwork and collaboration to achieve the best results.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Customer Focus</h3>
            <p style={styles.featureDescription}>Our customers are at the heart of everything we do. We aim to exceed their expectations.</p>
          </div>
        </div>
        <Link to="/contact" style={styles.contactButton}>Get in Touch</Link>
      </div>
    </div>
  );
};

// Inline styles as a JavaScript object
const styles = {
  aboutPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmp3HAcaRU357YwZqm0g5Cq4AoF4No_OW7w&s")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  aboutContent: {
    background: 'rgba(0, 0, 0, 0.7)', // Transparent black background
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '900px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
    animation: 'fadeIn 1s ease-out',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    animation: 'fadeInText 2s ease-out',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    marginBottom: '30px',
    opacity: 0,
    animation: 'fadeInText 2s ease-out 0.5s forwards',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px',
    marginBottom: '30px',
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeInText 2s ease-out 1s forwards',
  },
  featureTitle: {
    fontSize: '1.6rem',
    color: '#333',
    marginBottom: '10px',
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#555',
  },
  contactButton: {
    display: 'inline-block',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '15px 30px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    borderRadius: '5px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

// Add animations using keyframes
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

  .featureCard:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
  }

  .contactButton:hover {
    background-color: #218838;
    transform: scale(1.05);
  }
`;

export const GlobalStyles = () => {
  return <style>{stylesWithAnimations}</style>;
};

export default AboutPage;
