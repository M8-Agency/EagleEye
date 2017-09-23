import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../layouts/main';
import Button from '../components/Button';
import i from '../components/Input';
import Dropzone from 'react-dropzone';

const Input = i();
const FIRST = "firstName";
const LAST = "lastName";
const LOCATION = "location";
const NEEDS = "needs";
const TextArea = styled.textarea`
appearance: none;
border: 1px solid #ddd;
padding: 15px;
font-size: 1rem;
width: 320px;
display: block;
margin: 0 auto;
`;

let dropzoneRef;

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

  usePhoto(e) {
    console.log('use a photo', e);
    dropzoneRef.open();
  }

  onDrop(accepted, rejected) {
    console.log(accepted);
  }

  render(){
    const data = this.state;

    return(
      <div>

        <h2>Find a person</h2>

        <Dropzone hidden ref={(node) => { dropzoneRef = node; }} onDrop={this.onDrop.bind(this)} />

        <Button onClick={this.usePhoto}>
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

        <p><Link to="/">Go back</Link></p>
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
