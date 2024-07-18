import React, { useState } from 'react';
import AddTask from './AddTask';

const Todo = ({ todo, deleteTask, editTask, toggleTaskStatus }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <AddTask
          addTask={() => {}}
          editTask={editTask}
          todo={todo}
        />
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          <button onClick={() => toggleTaskStatus(todo.id)}>
            {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Todo;

