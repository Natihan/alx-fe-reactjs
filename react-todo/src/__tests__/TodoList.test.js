import React from 'react'; // <-- Add this line
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; // Adjust this import path if necessary

describe('TodoList Component', () => {
  test('renders the Todo List', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Clean the house')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Walk the dog' } });
    fireEvent.click(addButton);
    
    // Use getAllByText to get all items with the same text
    const todos = screen.getAllByText('Walk the dog');
    expect(todos.length).toBeGreaterThanOrEqual(1); // Ensure at least one exists
    expect(todos[todos.length - 1]).toBeInTheDocument(); // Ensure the new one is in the list
  });

  test('toggles a todo item completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Buy groceries');
    
    fireEvent.click(todo); // Click to toggle completion
    
    // Assert that the todo now has the 'line-through' style
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0]; // Delete the first todo
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Buy groceries')).not.toBeInTheDocument();
  });
});

