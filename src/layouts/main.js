import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const Container = styled.div`
  max-width: 1024px;
  padding: 0 20px;
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
