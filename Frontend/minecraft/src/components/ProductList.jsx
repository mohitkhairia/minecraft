import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import './ProductList.css';

const ProductList = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <div className="task-list">
      <h2>Product List</h2>
      <ul className="task-list-ul">
        {tasks.map(task => (
          <li key={task._id} className="task-list-item" onClick={() => onEditTask(task)}>
            <span>{task.name}</span>
            <span>{task.price}</span>
            <span>{task.description}</span>
            <img src={task.image} alt="" />
            <div className="icons">
              <FaEdit className="edit-icon" onClick={(e) => { e.stopPropagation(); onEditTask(task); }} />
              <FaTrash className="delete-icon" onClick={(e) => { e.stopPropagation(); onDeleteTask(task); }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
