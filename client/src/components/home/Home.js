import React from 'react';
import styled from 'styled-components';
import Input from '../search/Input';
import CardGrid from '../cards/CardGrid';

import { media } from '../../helpers/media';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Input />
        <CardGrid />
      </Wrapper>
    );
  }
}

export default Home;
