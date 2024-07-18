import React, { useState, useEffect } from 'react';

const AddTask = ({ addTask, editTask, todo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setStatus(todo.completed ? 'completed' : 'not completed');
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      const completed = status === 'completed';
      if (todo) {
        editTask(todo.id, title, description, completed);
      } else {
        addTask(title, description, completed);
      }
      setTitle('');
      setDescription('');
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      /><br/><br/>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      /><br/><br/>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="" disabled>Select Status</option>
        <option value="not completed">Not Completed</option>
        <option value="completed">Completed</option>
      </select><br/><br/>
      <button type="submit">{todo ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default AddTask;

