import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1024px;
`; // styled-components example

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Hello World!</h1>
      </Wrapper>
    );
  }
}

export default App;
