import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import SearchBox from '../search/SearchBox';

class App extends Component {
  render() {
    return (
      <Container textAlign="center" className="App">
        <SearchBox />
      </Container>
    );
  }
}

export default App;
