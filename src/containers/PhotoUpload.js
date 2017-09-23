import React from 'react';
import styled from 'styled-components';

import Layout from '../layouts/main';

import b from '../components/Button';

const ButtonHeight = "50px";

const Button = styled(b(ButtonHeight))`
  &.disabled {
    color: #b0bfff;
    border-color: #b0bfff;
  }
`;


const UploadInput = styled.input`
  opacity: 0;
  width: 0;
  display: none;
`;

const ButtonLabel = styled.label`
  height: ${ButtonHeight};
  text-align: center;
  border: 2px solid blue;
  border-radius: 10px;
  width: 95%;
  display: block;
  line-height: 3rem;
  font-size: 12pt;
  color: blue;
  margin: auto;
`;

const ImageThumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const ImageWrapper = styled.div`
  width: 95%;
  margin: auto;
  height: 250px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

class UploadSection extends React.Component {
  constructor(...args){
    super(...args);

    this.state = {
      uploaded: false
    };
  }

  updateImageDisplay(uploader){
    let file = uploader.files[0];
    console.log(file);
    let imageURL = window.URL.createObjectURL(file);
    this.setState({
      imageURL: imageURL,
      uploaded: true
    });
  }

  componentDidMount(){
    let uploader = document.querySelector('input#ImageUpload');
    uploader.addEventListener('change', this.updateImageDisplay.bind(this, uploader));
  }

  componentWillUmount(){
    let uploader = document.querySelector('input#ImageUpload');
    uploader.removeEventListener('change', this.updateImageDisplay.bind(this, uploader));
  }

  render(){
    const Wrapper = styled.div`
      margin: 15px 0;
    `;

    return(
      <Wrapper>
        <ImageWrapper>
         <ImageThumbnail id="ImageThumbnail" src={this.state.imageURL} alt="Thumbnail" />
        </ImageWrapper>
        <Wrapper>
          <ButtonLabel htmlFor="ImageUpload">Upload</ButtonLabel>
          <UploadInput id="ImageUpload" type="file" accept="image/*" placeholder="Upload"/>
          <Button className={this.state.uploaded ? "" : "disabled"}>Find</Button>
        </Wrapper>
      </Wrapper>
    )
  }
}

export default () => (
  <Layout>
    <section>
      <UploadSection />
    </section>
  </Layout>
)
