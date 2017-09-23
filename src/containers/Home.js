import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../layouts/main';


const MenuWrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
`;

const Button = styled.button`
  padding: 20px 60px;
  background: #5683B6;
  border-radius: 10px;
  margin-bottom: 1.45rem;
  border: none;

  a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.45rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
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
        <Link to='/report-person'>
          Report person(s)
        </Link>
      </Button>

    </MenuWrapper>
  </Layout>
);
