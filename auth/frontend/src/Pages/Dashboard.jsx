import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import './Dashboard.css'; // Assuming you have a CSS file for styling

function Dashboard() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [selectedExam, setSelectedExam] = useState('CAT'); // Default exam
  const [examContent, setExamContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedINUser'));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleExamSelection = (examName) => {
    setSelectedExam(examName);
    // Here, you can dynamically load content based on the exam
    switch (examName) {
      case 'CAT':
        setExamContent('Content for CAT exam');
        break;
      case 'GATE':
        setExamContent('Content for GATE exam');
        break;
      case 'JEE':
        setExamContent('Content for JEE exam');
        break;
      default:
        setExamContent('Please select an exam');
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>{loggedInUser}'s Dashboard</h2>
        <ul>
          <li onClick={() => handleExamSelection('CAT')}>CAT</li>
          <li onClick={() => handleExamSelection('GATE')}>GATE</li>
          <li onClick={() => handleExamSelection('JEE')}>JEE</li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="main-content">
        <h1>{selectedExam} Dashboard</h1>
        <p>{examContent}</p>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Dashboard;
