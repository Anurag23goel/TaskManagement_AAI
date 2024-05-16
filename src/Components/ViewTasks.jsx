import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import './CSS/ViewTasks.css'

const ViewTasks = () => {
  const [taskData, setTaskData] = useState([]);
  const [userName, setUserName] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const navigate = useNavigate();

  const getTasks = async () => {
    try {
      const userID = localStorage.getItem("userID");
      const response = await axios.get(`http://localhost:5000/api/viewTasks?userID=${userID}`);
      setTaskData(response.data.tasks);
      setUserName(response.data.user.name);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteTask/${id}`);
      getTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleAddTask = () => {
    navigate("/addTask");
  };

  const handleLogout = () => {
    navigate("/"); 
  };

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const filteredTasks = selectedPriority === "All" ? taskData : taskData.filter(task => task.priority === selectedPriority);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar userName={userName} handleLogout={handleLogout} />
      </header>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">My Tasks</h1>

        <div className="mb-4 flex items-center">
          <label htmlFor="priority" className="mr-2 font-semibold">Filter by Priority:</label>
          <select id="priority" value={selectedPriority} onChange={handlePriorityChange} className="px-2 py-1 border rounded-md">
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <div key={task._id} className="bg-white rounded-lg shadow-md p-5 border">
              <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
              <p className="text-gray-700">Description: {task.description}</p>
              <p className="text-gray-700">Status: {task.status}</p>
              <p className="text-gray-700">Priority: {task.priority}</p>
              <div className="mt-4 flex justify-start">
                <a href={`/updateTask/${task._id}`} className="btn-edit mr-3">Edit</a>
                <button className="btn-delete" onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-add" onClick={handleAddTask}>Add Another Task</button>
      </div>
    </div>
  );
};

export default ViewTasks;
