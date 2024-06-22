import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  color: #1A1B41;
  padding-top: 4px;
  height: 60px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h4>Weather Widget - Todo List</h4>
    </HeaderContainer>
  );
};

export default Header;
