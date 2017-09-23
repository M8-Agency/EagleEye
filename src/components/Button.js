import React from 'react';
import styled from 'styled-components';

const TextStyles = `
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #FFFFFF;
  text-decoration: none;
  font-weight: bold;
`;

const StyledButton = styled.button`
  border: none;
  display: block;
  margin: auto;
  background-color: #00ca9d;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  padding: 15px 50px;
  ${TextStyles}
  a {
    ${TextStyles}
  }
`;

export default ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    { children }
  </StyledButton>
);
