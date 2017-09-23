import React from 'react';
import styled from 'styled-components';

import Layout from '../layouts/main';

const Wrapper = styled.section`
  max-width: 1024px;
`; // styled-components example

export default () => (
  <Layout>
    <Wrapper>
      <h1>Hello World!</h1>
    </Wrapper>
  </Layout>
);
