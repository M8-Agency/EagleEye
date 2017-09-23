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

const FIRST = "firstName";
const LAST = "lastName";
const LOCATION = "location";
const NEEDS = "needs";

class Pickers extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  inputChange(key, event){
    let data = this.state;
    data[key] = event.target.value;
    this.setState(data);
  }

  render(){

    const data = this.state;

    return(
      <div>
        <Button>
          <StyledLink to="/find/photo-upload"><b>Use Photo</b></StyledLink>
        </Button>
        <div style={{margin: "15px 0"}}>
          <Input onChange={this.inputChange.bind(this, FIRST)} type="text" placeholder="First Name" value={data[FIRST]}/>
          <Input onChange={this.inputChange.bind(this, LAST)} type="text" placeholder="Last Name" value={data[LAST]}/>
          <Input onChange={this.inputChange.bind(this, LOCATION)} type="text" placeholder="Location" value={data[LOCATION]}/>
          <TextArea onChange={this.inputChange.bind(this, NEEDS)} type="text" placeholder="Special Needs" value={data[NEEDS]}/>
        </div>
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
