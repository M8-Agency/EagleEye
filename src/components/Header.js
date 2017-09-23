import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0.8rem;
  border-bottom: 4px solid #CFCFCF;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 100;
  font-size: 1.2rem;
  letter-spacing: 1px;
  b {
    font-weight: 500;
    letter-spacing: 0px;
  }
`;

export default ({ match }) => (
  <header>
    <Navigation>
      <StyledLink to="/">
        <Title>
          Join<b>Together</b>
        </Title>
      </StyledLink>
    </Navigation>
  </header>
);
