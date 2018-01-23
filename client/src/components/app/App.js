import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from '../home/Home';
import Details from '../details/Details';
import Navbar from '../nav/Navbar';
import { media } from '../../helpers/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: 100vh;

  ${media.phone`
      width: 90%;`};
`;

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Details} />
        </Switch>
      </Wrapper>
    </div>
  </Router>
);

export default App;
