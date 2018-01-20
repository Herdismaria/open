import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { media } from '../../helpers/media';

import TransitionGroupPlus from 'react-transition-group-plus';
import * as searchActions from '../../redux/searchReducer';
import * as placesActions from '../../redux/placesReducer';

import Card from './SimpleCard';

const Grid = styled.div`
  margin: auto;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 80%;

  ${media.phone`
    width: 90%;`};
`;

const NoResultsText = styled.h3`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 24px;
  letter-spacing: 3px;
`;

class CardGrid extends React.Component {
  fetchPlace = id => {
    this.props.fetchPlace(id);
  };

  render() {
    const { results } = this.props;
    let delay = 0;
    return (
      <Grid>
        <TransitionGroupPlus transitionMode="out-in" component={Grid}>
          {results.length === 0
            ? ''
            : results.map((place, index) => (
                <Card
                  key={index}
                  {...place}
                  delay={(delay += 0.1)}
                  fetchPlace={this.fetchPlace}
                />
              ))}
        </TransitionGroupPlus>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => ({
  search: state.search,
  results: state.search.results,
  places: state.places,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...placesActions, ...searchActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid);
