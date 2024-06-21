// src/components/TodoListWidget.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const TodoListWidget = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = index => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = index => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <TodoContainer>
      <h3>Todo List</h3>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="Add a new todo" />
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <div>
              <button onClick={() => toggleTodo(index)}>Toggle</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </TodoItem>
        ))}
      </div>
    </TodoContainer>
  );
};

export default TodoListWidget;
