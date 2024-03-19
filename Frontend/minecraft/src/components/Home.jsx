import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProducts from './AddProducts';
import ProductList from './ProductList';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  const handleDeleteTask = async (task) => {
    try {
      await axios.delete(`http://localhost:3001/api/${task._id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTaskSubmit = async (taskData) => {
    try {
      if (selectedTask) {
        await axios.put(`http://localhost:3001/api/${selectedTask._id}`, taskData);
      } else {
        await axios.post('http://localhost:3001/api/', taskData);
      }
      fetchTasks();
      setSelectedTask(null);
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };

  const handleLogout = () => {
  
    navigate('/login');
  };

  return (
    <div className="task-manager-container">
      <div className="task-manager-header">
       
       <button className="task-manager-button" onClick={handleLogout}>Logout</button>
     </div>
      
      <AddProducts onSubmit={handleTaskSubmit} selectedTask={selectedTask} />
      <ProductList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default Home;
