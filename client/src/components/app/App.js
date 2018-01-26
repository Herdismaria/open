import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from '../home/Home';
import Details from '../details/Details';
import Navbar from '../nav/Navbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
`;

const App = () => (
  <Router>
    <Wrapper>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Details} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
