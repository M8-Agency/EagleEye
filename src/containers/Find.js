import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Layout from '../layouts/main';
import Button from '../components/Button';
import i from '../components/Input';

const InputHeight = "50px";
const TextAreaHeight = "75px";
const Input = i(InputHeight);

const TextArea = styled.textarea`
  appearance: none;
  border: 1px solid #ddd;
  padding: 15px;
  font-size: 1rem;
  width: 320px;
  display: block;
  margin: 0 auto;
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

  usePhoto() {
    console.log('use a photo');
  }

  render(){

    const data = this.state;

    return(
      <div>

        <h2>Find a person</h2>

        <Button onClick={this.usePhoto.bind(this)}>
          Use a photo
        </Button>

          <h5>Add optional details below</h5>

        <div>
          <Input onChange={this.inputChange.bind(this, FIRST)} type="text" placeholder="First name" value={data[FIRST]}/>
          <Input onChange={this.inputChange.bind(this, LAST)} type="text" placeholder="Last name" value={data[LAST]}/>
          <Input onChange={this.inputChange.bind(this, LOCATION)} type="text" placeholder="Last known location" value={data[LOCATION]}/>
          <TextArea onChange={this.inputChange.bind(this, NEEDS)} type="text" placeholder="Special needs or important info" value={data[NEEDS]}/>
        </div>

        <Button>
          Find
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
