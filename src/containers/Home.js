import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../layouts/main';
import Button from '../components/Button';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 4rem;
`;

export default () => (
  <Layout>

    <MenuWrapper>
      <Button>
        <Link to='/find'>
          Find Person
        </Link>
      </Button>

      <Button>
        <Link to='/report'>
          Report person(s)
        </Link>
      </Button>

    </MenuWrapper>
  </Layout>
);
