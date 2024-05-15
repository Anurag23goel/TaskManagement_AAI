import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/StartingPage.css'; // Import the CSS file for additional styling


const StartingPage = () => {
  const navigate = useNavigate();



  const handleAddTask = () => {
    // Navigate to the desired URL when the button is clicked
    navigate('/addTask');
  };
  
  const handleViewTask = () => {
    // Navigate to the desired URL when the button is clicked
    navigate('/viewTasks');
  };

  return (
    <div className="starting-page-container">
      <div className="card">
        <div className="content">
          <h1 className="title">Airport Authority of India</h1>
          <h3 className="subtitle">Task Management System</h3>
          <div className="button-container">
            <button className="action-button add-button" onClick={handleAddTask}>ADD TASK</button>
            <button className="action-button view-button" onClick={handleViewTask}>VIEW TASK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
