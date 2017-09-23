import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const Container = styled.div`
  max-width: 1024px;
  padding: 0 0.8rem;
  margin: 0 auto;
  p {
    text-align: center;
    line-height: 1.45rem;
  }
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
    line-height: 2rem;
  }
  h3 {
    text-align: center;
  }
`;

export default ({
  children
}) => (
  <div>
    <Header />
    <Container>
      { children }
    </Container>
  </div>
);
