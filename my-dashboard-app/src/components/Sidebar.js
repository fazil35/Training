// src/components/Sidebar.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

const SidebarContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  width: 200px;
  
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const SidebarButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #444;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    margin: 0;
    width: auto;
    flex-grow: 1;
    text-align: center;
  }
`;

const Sidebar = () => {
  const { setWeatherVisible, setTodoVisible } = useContext(AppContext);

  return (
    <SidebarContainer>
      <SidebarButton onClick={() => setWeatherVisible(prev => !prev)}>Toggle Weather</SidebarButton>
      <SidebarButton onClick={() => setTodoVisible(prev => !prev)}>Toggle Todo List</SidebarButton>
    </SidebarContainer>
  );
};

export default Sidebar;
