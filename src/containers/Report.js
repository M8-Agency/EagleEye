import React, { Component } from 'react';
import Layout from '../layouts/main';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const DropzoneWrapper = styled.div`
  .dropzone {
    padding: 1rem 1.8rem;
    border-width: 2px;
    border-color: rgb(77, 157, 252);
    border-style: dashed;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Previews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  img {
    max-height: 150px;
    height: inherit;
    margin: 0.2rem;
  }
`;

class Report extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      handlingFiles: false,
      thankYou: false,
    };
  }

  onDrop(accepted, rejected) {
    this.setState({
      handlingFiles: true,
      files: accepted
    });

    accepted.forEach(file => {
      console.log(file);

    });
    // detect faces on these pictures
    // upload pictures with faces
  }

  reset() {
    this.setState({
      files: [],
      handlingFiles: false,
      thankYou: false,
    });
  }

  render() {
    return (
      <Layout>

        {!this.state.handlingFiles && !this.state.thankYou &&
          <div>
            <h2>Report SAFE person(s)</h2>
            <p>We will detect and match any detectable faces in your pictures and notify users that are trying to find them!</p>

            <DropzoneWrapper>
              <Dropzone
                className="dropzone"
                name="report_users"
                multiple={true}
                onDrop={this.onDrop.bind(this)}
                accept="image/jpeg, image/png"
                >
                <p><strong>Click</strong> to select photos or <strong>drag and drop</strong> them here.</p>
              </Dropzone>
            </DropzoneWrapper>
          </div>
        }

        {this.state.handlingFiles && !this.state.thankYou &&
          <div>
            handling files... a loader should go here!
          </div>}

        {this.state.thankYou &&
          <div>
            <h3>Thank you for contributing!</h3>
            <p>We've uploaded the photo(s) below. We will notify any users looking for the detected persons immediately. <a onClick={this.reset.bind(this)}><strong>Click here to upload more photos</strong></a>.</p>
            <Previews>
              { this.state.files.map(f => <img key={f.name} src={f.preview} alt={f.name} />) }
            </Previews>
          </div>}
          <Button>
            <Link to="/">Go back</Link>
          </Button>

      </Layout>
    );
  }
}

export default Report;
