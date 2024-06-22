import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './context/AppContext';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WeatherWidget from './components/WeatherWidget';
import TodoListWidget from './components/TodoListWidget';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NoDataMessage = styled.h2`
  color: red;
  text-align: center;
  margin-top: 20px;
  font-size: 1.5em;
`;

const App = () => {
  const { weatherVisible, todoVisible } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Sidebar />
        <MainContent>
          {weatherVisible && <WeatherWidget />}
          {todoVisible && <TodoListWidget />}
          {(!weatherVisible && !todoVisible) && <NoDataMessage>No data available</NoDataMessage>}
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
