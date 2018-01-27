import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { media } from '../../helpers/media';
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
  width: 60%;
  margin: 0 auto;
  padding: 0;
  text-align: center;

  ${media.phone`
    width: 90%;
    `};
`;

const NoResultText = styled.h4`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
  margin: 0 auto;
  padding: 50px;
`;

class CardGrid extends React.Component {
  handleOnClick = (id, e) => {
    const { fetchPlace } = this.props;
    fetchPlace(id);
  };

  render() {
    const { results } = this.props;
    const { isSearching } = this.props.search;
    let delay = 0;
    return (
      <Grid>
        {results.length === 0 && !isSearching ? (
          <NoResultText>Engar niðurstöður fundust...</NoResultText>
        ) : (
          results.map(place => (
            <Card
              key={place.id}
              {...place}
              onClick={this.handleOnClick}
              delay={(delay += 0.1)}
            />
          ))
        )}
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
