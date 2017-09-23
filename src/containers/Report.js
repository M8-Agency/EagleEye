import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../layouts/main';

export default () => (
  <Layout>
    <h2>Just upload photos of the person(s) you have located!</h2>
    <p>We will detect and match any detectable faces and notify any users that try to find them!</p>
  </Layout>
);
