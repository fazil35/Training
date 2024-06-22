import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

const SidebarContainer = styled.div`
  background-color: #1A1B41;
  color: white;
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
  padding: 20px;
  background-color: #1A1B41;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0069E4;
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
