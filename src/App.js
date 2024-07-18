
import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (title, description, completed) => {
    setTodos([...todos, { id: Date.now(), title, description, completed }]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTask = (id, newTitle, newDescription, completed) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title: newTitle, description: newDescription, completed } : todo
    ));
  };

  const toggleTaskStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask addTask={addTask} editTask={editTask} />
      <ListTask
        todos={todos}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </div>
  );
}

export default App;
