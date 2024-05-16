import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/StartingPage.css'; // Import the CSS file for additional styling
import axios from 'axios';

const StartingPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const checkLoggedIn = () => {
    const token = localStorage.getItem('token')
    // console.log(token);
    if(!token){
      navigate('/')
    }
  }

  const getUserName = async() => {
    const userID = localStorage.getItem("userID");
    const response = await axios.get(`http://localhost:5000/api/viewTasks?userID=${userID}`);
    setUserName(response.data.user.name);
  }
  useEffect(() => {
    checkLoggedIn()
    getUserName()
  }, [])

  const handleAddTask = () => {
    // Navigate to the desired URL when the button is clicked
    navigate('/addTask');
  };
  
  const handleViewTask = () => {
    // Navigate to the desired URL when the button is clicked
    navigate('/viewTasks');
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/');
  };

  return (
    <div className="starting-page-container">
      <div className="card">
        <div className="content">
          <h1 className="title">Airport Authority of India</h1>
          <h3 className="midtitle">Task Management System</h3>
          <h3 className="subtitle">Welcome {userName}</h3>
          <div className="button-container">
            <button className="action-button add-button" onClick={handleAddTask}>ADD TASK</button>
            <button className="action-button view-button" onClick={handleViewTask}>VIEW TASK</button>
            <button className="action-button logout-button" onClick={handleLogout}>LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
