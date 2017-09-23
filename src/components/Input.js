import React from 'react';
import styled from 'styled-components';

export default (height) => styled.input`
height: ${height};
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
border: 1px solid #ddd;
margin: 7px auto;
width: 95%;
-webkit-padding-start: 15px;
font-size: 12pt;

&:focus {
  outline: none;
}
`;