import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Layout from '../layouts/main';

import b from '../components/Button';
import i from '../components/Input';

const InputHeight = "50px";
const TextAreaHeight = "75px";

const Button = b(InputHeight);

const Input = i(InputHeight);

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
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
          <StyledLink to="/find/photo-upload"><b>Use Photo</b></StyledLink>
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