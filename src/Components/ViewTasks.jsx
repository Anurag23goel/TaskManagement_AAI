import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/ViewTasks.css'

const ViewTasks = () => {
    const [taskData, setTaskData] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        getTasks()
    }, []);

    const getTasks = async() => {
        axios.get('http://localhost:5000/api/viewTasks')
        .then(response => {
            setTaskData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    const deleteTask = async(id) => {
        axios.delete(`http://localhost:5000/api/deleteTask/${id}`)
        getTasks()
    }

    const handleAddTask = () => {
        navigate('/addTask')
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">My Tasks</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
                {taskData.map(task => (
                    <div key={task._id} className="bg-white rounded-lg shadow-md p-5 border">
                        <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                        <p className="text-gray-700">Description: {task.description}</p>
                        <p className="text-gray-700">Status: {task.status}</p>
                        <p className="text-gray-700">Priority: {task.priority}</p>
                        <div className="mt-4 flex justify-start">
                            <a href={`/updateTask/${task._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mr-3">Edit</a>
                            <a href="/viewTasks"><button className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md" onClick={() => deleteTask(task._id)}>Delete</button></a>
                        </div>
                    </div>
                ))}
            </div>
            <button id='addtaskbutton' onClick={handleAddTask}>Add Another Task</button>
        </div>
    );
}

export default ViewTasks;
