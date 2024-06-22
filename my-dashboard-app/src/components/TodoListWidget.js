import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 22px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

   @media (max-width: 768px) {
    margin: 10px 0;
  }
  
`;

const TodoInput = styled.input`
  padding: 10px;
  width: calc(100% - 22px);
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TodoButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const TodoText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const TodoActions = styled.div`
  display: flex;
  gap: 10px;
`;

const EditInput = styled.input`
  padding: 5px;
  width: calc(100% - 12px);
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TodoListWidget = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

  const editTodo = index => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveEditTodo = index => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <TodoContainer>
      <h3>Todo List</h3>
      <TodoInput
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <TodoButton onClick={addTodo}>Add</TodoButton>
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            {editingIndex === index ? (
              <>
                <EditInput
                  type="text"
                  value={editingText}
                  onChange={e => setEditingText(e.target.value)}
                />
                <TodoButton onClick={() => saveEditTodo(index)}>Save</TodoButton>
              </>
            ) : (
              <>
                <TodoText completed={todo.completed}>{todo.text}</TodoText>
                <TodoActions>
                  <TodoButton onClick={() => toggleTodo(index)}>Completed</TodoButton>
                  <TodoButton onClick={() => editTodo(index)}>Edit</TodoButton>
                  <TodoButton onClick={() => deleteTodo(index)}>Delete</TodoButton>
                </TodoActions>
              </>
            )}
          </TodoItem>
        ))}
      </div>
    </TodoContainer>
  );
};

export default TodoListWidget;