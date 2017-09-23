import React from 'react';
import styled from 'styled-components';

import Layout from '../layouts/main';

const InputHeight = "50px";
const TextAreaHeight = "75px";

const Button = styled.button`
  border: 2px solid blue;
  border-radius: 10px;
  width: 95%;
  margin: auto;
  height: ${InputHeight};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: inherit;
  font-size: 12pt;
  color: blue;
  
  &:focus, &:active {
    outline: none;
  }
`;

const Input = styled.input`
  height: ${InputHeight};
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

const TextArea = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: ${TextAreaHeight};
  border: 1px solid #ddd;
  padding: 15px 0 0 15px;
  font-size: 12pt;
  width: 95%;

  &:focus {
    outline: none;
  }
`;

class Pickers extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const InputsDiv = styled.div`
      margin: 15px 0;
    `;

    return(
      <div>
        <Button>
          <b>Use Photo</b>
        </Button>
        <InputsDiv>
          <Input type="text" placeholder="First Name"/>
          <Input type="text" placeholder="First Name"/>
          <Input type="text" placeholder="Location"/>
          <TextArea type="text" placeholder="Special Needs"/>
        </InputsDiv>
        <Button>
          <b>Find</b>
        </Button> 
      </div>
    )
  }
}

export default () => (
  <Layout>
    <section>
      <Pickers />
    </section>
  </Layout>
)
