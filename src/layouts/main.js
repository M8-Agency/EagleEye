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
  h1, h2, h3, h4, h5 {
    text-align: center;
  }
  h2 {
    line-height: 2rem;
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
