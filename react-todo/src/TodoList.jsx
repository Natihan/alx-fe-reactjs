// src/TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Clean the house', completed: false },
    { id: 3, text: 'Walk the dog', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
