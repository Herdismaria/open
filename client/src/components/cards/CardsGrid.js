import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TransitionGroupPlus from 'react-transition-group-plus';
import * as searchActions from '../../redux/searchReducer';
import * as placesActions from '../../redux/placesReducer';

import Card from './SimpleCard';

const Grid = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class CardGrid extends React.Component {
  render() {
    const { results } = this.props.search;
    let delay = 0;
    return (
      <Grid>
        <TransitionGroupPlus component={Grid}>
          {results.map((place, index) => (
            <Card key={index} {...place} delay={(delay += 0.1)} />
          ))}
        </TransitionGroupPlus>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => ({
  search: state.search,
  places: state.places,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...placesActions, ...searchActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid);
