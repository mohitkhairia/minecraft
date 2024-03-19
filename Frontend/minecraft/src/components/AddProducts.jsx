
import React, { useState, useEffect } from 'react';
import './AddProducts.css'; 

const AddProducts = ({ onSubmit, selectedTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (selectedTask) {
      setName(selectedTask.name);
      setPrice(selectedTask.price);
      setDescription(selectedTask.description);
      setImageUrl(selectedTask.image);
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price, image });
    setName('');
    setDescription('');
    setPrice(0)
    setImageUrl('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <input type="number" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="string" value={image} onChange={(e) => setImageUrl(e.target.value)} />
      <button type="submit">{selectedTask ? 'Update Product' : 'Create Product'}</button>
    </form>
  );
};

export default AddProducts;
