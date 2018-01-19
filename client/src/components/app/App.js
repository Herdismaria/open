import React from 'react';
import './App.css';
import Input from '../search/Input';
import CardGrid from '../cards/CardsGrid';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
`;

const App = () => (
  <Wrapper>
    <Input />
    <CardGrid />
  </Wrapper>
);

export default App;
