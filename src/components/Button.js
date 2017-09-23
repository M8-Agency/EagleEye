import React from 'react';
import styled from 'styled-components';

export default (height) => styled.button`
border: 2px solid blue;
border-radius: 10px;
width: 100%;
display: block;
margin: auto;
height: ${height};
background-color: inherit;
font-size: 12pt;
color: blue;
margin-top: 7px;

&:focus, &:active {
  outline: none;
}
`;