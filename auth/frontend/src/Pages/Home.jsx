import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedINUser'));
  const [selectedExam, setSelectedExam] = useState('');

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
  };

  const examContent = {
    CAT: "The Common Admission Test (CAT) is a computer-based test for admission to business schools in India. It consists of sections like Verbal Ability, Quantitative Ability, and Data Interpretation & Logical Reasoning.",
    GATE: "The Graduate Aptitude Test in Engineering (GATE) is an exam for admission to postgraduate programs in engineering. It tests the knowledge of engineering subjects and general aptitude.",
    JEE: "The Joint Entrance Examination (JEE) is an entrance exam for various undergraduate courses in engineering. It consists of two parts: JEE Main and JEE Advanced.",
    NEET: "The National Eligibility cum Entrance Test (NEET) is an entrance exam for medical colleges in India. It tests biology, physics, and chemistry knowledge.",
    SSC: "The Staff Selection Commission (SSC) exam is conducted for recruitment to various posts in the Indian government, including Group B and C positions in various ministries and departments.",
  };

  return (
    <div className="home-container">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .home-container {
            display: flex;
            height: 100vh;
            font-family: 'Arial', sans-serif;
            margin-top: 70px; 
            overflow: hidden;
          }

          .sidebar {
            width: 200px;
            background-color:rgb(37, 35, 35);
            color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 10px;    /* Ensures the sidebar stays in place when scrolling */
            height: calc(100vh ); 
            overflow-y: auto;
          }

          .sidebar h3 {
            margin-bottom: 20px;
            font-size: 1.5rem;
            font-weight: 600;
          }

          .sidebar button {
            width: 100%;
            padding: 15px ;
            background-color:rgb(37, 35, 35);
            color: white;
            border: none;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .sidebar button:hover {
            background-color: #0056b3;
          }

          .main-content {
            flex: 1;
            background-color: #f7f7f7;
            padding: 40px;
            overflow-y: auto;
            border-radius: 8px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%; /* Ensures the main section takes up full width */
          }

          .main-content h1 {
            color: #333;
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .main-content h2 {
            color: #555;
            font-size: 1.5rem;
            margin-bottom: 20px;
          }

          .exam-content {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            font-size: 1rem;
            color: #555;
          }
        `}
      </style>
      
      <div className="sidebar">
        <h3>Exams</h3>
        <button onClick={() => handleExamClick('CAT')}>CAT</button>
        <button onClick={() => handleExamClick('GATE')}>GATE</button>
        <button onClick={() => handleExamClick('JEE')}>JEE</button>
        <button onClick={() => handleExamClick('NEET')}>NEET</button>
        <button onClick={() => handleExamClick('SSC')}>SSC</button>
      </div>

      <div className="main-content">
        <h1>Welcome {loggedInUser}</h1>
        <h2>{selectedExam ? `${selectedExam} Exam Information` : 'Please select an exam to view details'}</h2>

        {selectedExam && (
          <div className="exam-content">
            <p>{examContent[selectedExam]}</p>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
