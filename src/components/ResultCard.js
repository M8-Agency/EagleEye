import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 95%;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  height: 75%;
  width: 100%;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;


const Image = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const InfoWrapper = styled.div`
  padding: 5px 25px;
`;

const InfoSection = styled.div`
  font-size: 12pt;
  font-weight: 300;
  * { display: inline-block; }
  margin: 3px 0;
`;

const Title = styled.div`
  font-weight: 400;
  margin-right: 5px;
`;

class ResultCard extends Component {

  render(){
    return(
      <CardWrapper>
        <ImageWrapper>
          <Image src={this.props.image} alt="Thumbnail" />
        </ImageWrapper>
        <InfoWrapper>
          <InfoSection>
            <Title>Name:</Title>
            {this.props.name}
          </InfoSection>
          <InfoSection>
            <Title>Location:</Title>
            {this.props.location || "NA"}
          </InfoSection>
          <InfoSection>
          <Title>Special Needs:</Title>
          {this.props.specialNeeds || "NA"}
          </InfoSection>
        </InfoWrapper>
      </CardWrapper>
    )
  }
}

ResultCard.PropTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  specialNeeds: PropTypes.string,
  image: PropTypes.image
};

export default ResultCard;
