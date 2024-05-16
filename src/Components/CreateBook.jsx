import React, { useState } from "react";
import axios from "axios";
import "./CSS/CreateBook.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const [TodoData, setTodoData] = useState({
    task_name: "",
    task_description: "",
    task_status: "",
    task_priority: "",
    userID: localStorage.getItem('userID')
});

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodoData({
      ...TodoData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/addTodo",
        TodoData
      );
      //console.log(response.data);
      setTodoData({
        task_name: "",
        task_description: "",
        task_status: "",
        task_priority: "",
        userID: localStorage.getItem('userID')
      });
      //navigate('/viewTasks')
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewTask = () => {
    navigate('/viewTasks')
  }

 

  return ( 
    <div className="themecolor">
    <div className="form-container">
      <fieldset>
        <legend>Add Task</legend>
        <div className="input-group">
          <label htmlFor="task_name">Task Name</label>
          <input
            required
            type="text"
            name="task_name"
            value={TodoData.task_name}
            placeholder="Enter Task Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="task_description">Description</label>
          <input
            required
            type="text"
            name="task_description"
            value={TodoData.task_description}
            placeholder="Enter Task Description"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="task_priority">Priority</label>
          <select
            required
            name="task_priority"
            value={TodoData.task_priority}
            onChange={handleInputChange}
          >
            <option hidden selected>Select One</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="task_status">Status</label>
          <select
            required
            name="task_status"
            value={TodoData.task_status}
            onChange={handleInputChange}
          >
            <option hidden selected>Select One</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="button-container">
            <input
              type="button"
              value="Add Task"
              name="addTodo"
              onClick={handleFormSubmit}
            />
            <input
              type="button"
              value="View All Task"
              name="viewTask"
              onClick={handleViewTask}
            />
          </div>
      </fieldset>
    </div>
    </div>
  );
}

export default CreateBook;