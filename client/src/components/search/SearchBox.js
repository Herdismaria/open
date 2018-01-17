import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Search, Grid } from 'semantic-ui-react';
import * as searchActions from '../../redux/searchReducer';
import * as placesActions from '../../redux/placesReducer';
import './Search.css';

import React from 'react';
const ENTER_KEY_CODE = 13;

const IngredientsSearchResult = ({ id, title }) => (
  <div key={id}>
    <div className="main">
      <div className="title">{title}</div>
    </div>
  </div>
);

class SearchBox extends React.Component {
  componentWillMount() {
    this.timer = null;
  }

  // set timeout so that http request is only sent when the user has stopped writing
  handleSearchChange = (e, { value }) => {
    clearTimeout(this.timer);

    const { updateSearchValue } = this.props;
    updateSearchValue(value);
    this.timer = setTimeout(() => {
      this.calculateSuggestions(value);
    }, 500);
  };

  // get autocomplete suggestions, if no characters, reset state
  calculateSuggestions = value => {
    const { resetSearch, getResults } = this.props;
    if (value.length === 0) {
      resetSearch();
    } else {
      getResults();
    }
  };

  handleResultSelect = (e, { result }) => {
    const { updateSearchValue, setPlace, fetchPlace } = this.props;
    updateSearchValue(result.title);
    setPlace(result);
    fetchPlace();
  };

  render() {
    const { isLoading, results, value } = this.props.search;
    return (
      <Grid container stretched>
        <Grid.Column>
          <Search
            input="text"
            size="large"
            selectFirstResult
            loading={isLoading}
            onSearchChange={this.handleSearchChange}
            onResultSelect={this.handleResultSelect}
            results={results}
            value={value}
            resultRenderer={IngredientsSearchResult}
          />
        </Grid.Column>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
