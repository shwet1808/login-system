import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div style={styles.contactPage}>
      <div style={styles.contactContent}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.description}>We would love to hear from you! Reach out to us for any questions or feedback.</p>
        <form style={styles.contactForm}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
        <Link to="/" style={styles.backButton}>Back to Home</Link>
      </div>
    </div>
  );
};

// Inline styles as a JavaScript object
const styles = {
  contactPage: {
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
  contactContent: {
    background: 'rgba(0, 0, 0, 0.7)', // Transparent black background
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '700px',
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
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '120px',
    marginBottom: '10px',
    transition: 'border-color 0.3s ease',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '1.2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  backButton: {
    display: 'inline-block',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '15px 30px',
    fontSize: '1.2rem',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
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

  .submitButton:hover {
    background-color: #0056b3;
  }

  .backButton:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  .input:focus, .textarea:focus {
    border-color: #007bff;
  }
`;

export const GlobalStyles = () => {
  return <style>{stylesWithAnimations}</style>;
};

export default ContactPage;
