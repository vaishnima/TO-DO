import React from 'react';
import Todo from './Todo';

const ListTask = ({ todos, deleteTask, editTask, toggleTaskStatus }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </ul>
  );
};

export default ListTask;
