import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../layouts/main';
import Button from '../components/Button';
import i from '../components/Input';
import Dropzone from 'react-dropzone';
import GoX from 'react-icons/lib/go/x';
import { Route } from 'react-router-dom';

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

const PhotoPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 0.85rem;
    line-height: 1rem;
    color: black;
    font-style: italic;
    padding: 0px 10px;
  }
  img {
    display: block;
    max-height: 200px;
    max-width: 200px;
  }
  span {
    background: #CA4272;
    display: block;
    padding: 5px 10px;
    color: white;
    margin-top: 0.5rem;
  }
`;

let dropzoneRef;

class Finder extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      handlingPhoto: false,
      photoReadyForSubmit: false,
      files: [],
      form: null,
    };
  }

  inputChange(key, event){
    let data = this.state;
    data[key] = event.target.value;
    this.setState(data);
  }

  usePhoto(e) {
    dropzoneRef.open();
  }

  resetPhoto(e) {
    this.setState({
      handlingPhoto: false,
      photoReadyForSubmit: false,
      files: [],
    });
  }

  onDrop(accepted, rejected) {
    console.log(accepted, rejected);
    this.setState({
      handlingPhoto: false,
      photoReadyForSubmit: true,
      files: accepted,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Handle submit!');
    // send the form to the server
    // check the picture
    // for now, let's send users to the results view
    // with the state as stub data
    this.props.history.push('/find-results', this.state);
  }

  render() {
    const data = this.state;

    return(
      <div>

        <h2>Find a person</h2>

        {!this.state.handlingPhoto && !this.state.photoReadyForSubmit &&
        <div>
          <Dropzone
            hidden
            ref={(node) => { dropzoneRef = node; }}
            onDrop={this.onDrop.bind(this)}
            accept="image/jpeg, image/png"
          />
          <Button onClick={this.usePhoto}>
            Use a photo
          </Button>
        </div>}

        {!this.state.handlingPhoto && this.state.photoReadyForSubmit &&
        <PhotoPreview>
          <p>Please confirm correct orientation. Faces with more than 30 degrees of tilt will be hard to recognize!</p>
          { this.state.files.map(f => <img key={f.name} src={f.preview} alt={f.name} />) }
          <span onClick={this.resetPhoto.bind(this)}><GoX /> Repick photo</span>
        </PhotoPreview>}

        <h5>Add optional details below</h5>

        <div>
          <Input onChange={this.inputChange.bind(this, FIRST)} type="text" placeholder="First name" value={data[FIRST]}/>
          <Input onChange={this.inputChange.bind(this, LAST)} type="text" placeholder="Last name" value={data[LAST]}/>
          <Input onChange={this.inputChange.bind(this, LOCATION)} type="text" placeholder="Last known location" value={data[LOCATION]}/>
          <TextArea onChange={this.inputChange.bind(this, NEEDS)} type="text" placeholder="Special needs or important info" value={data[NEEDS]}/>
        </div>

        <Button onClick={this.handleSubmit.bind(this)}>
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
      <Route render={({ history }) => (
        <Finder history={history} />
      )} />
    </section>
  </Layout>
);
