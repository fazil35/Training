// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #6200ea;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Dashboard</h1>
    </HeaderContainer>
  );
};

export default Header;
