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
  width: 40%;

  ${media.phone`
    width: 90%;
    `};
`;

class CardGrid extends React.Component {
  handleOnClick = (id, e) => {
    const { fetchPlace } = this.props;
    fetchPlace(id);
  };

  render() {
    const { results } = this.props;
    const { isFetching } = this.props.search;
    console.log(this.props);
    return (
      <Grid>
        {results.map(place => (
          <Card key={place.id} {...place} onClick={this.handleOnClick} />
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => ({
  search: state.search,
  results: state.search.results,
  places: state.places,
  app: state.app,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...placesActions, ...searchActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid);
