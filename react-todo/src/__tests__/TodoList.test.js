import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders the Todo List', () => {
    render(<TodoList />);

    // Check if the header is in the document
    expect(screen.getByText('Todo List')).toBeInTheDocument();

    // Check if the initial todos are rendered
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Clean the house')).toBeInTheDocument();
    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item completion', () => {
    render(<TodoList />);

    const todo = screen.getByText('Buy groceries');

    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText('Delete')[0]; // Delete the first todo

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Buy groceries')).not.toBeInTheDocument();
  });
});
