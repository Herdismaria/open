import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Search, Grid } from 'semantic-ui-react';
import * as actions from '../../redux/searchReducer';

import React from 'react';
const ENTER_KEY_CODE = 13;

const IngredientsSearchResult = ({ id, title }) => {
  return (
    <div key={id}>
      <div className="main">
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

class SearchBox extends React.Component {
  componentWillMount() {
    this.timer = null;
  }

  handleSearchChange = (e, { value }) => {
    clearTimeout(this.timer);

    const { updateSearchValue } = this.props;
    updateSearchValue(value);
    this.timer = setTimeout(() => {
      this.calculateSuggestions(value);
    }, 500);
  };

  calculateSuggestions = value => {
    const { resetSearch, getResults } = this.props;
    if (value.length === 0) {
      resetSearch();
    } else {
      getResults();
    }
  };

  handleResultSelect = (e, { result }) => {
    const { updateSearchValue } = this.props;
    updateSearchValue(result.title);
  };
  onKeyDown = (e, data) => {
    if (e.keyCode !== ENTER_KEY_CODE) {
      return;
    }
  };

  render() {
    const { isLoading, results, value } = this.props.search;
    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            fluid
            size="huge"
            loading={isLoading}
            onSearchChange={this.handleSearchChange}
            onResultSelect={this.handleResultSelect}
            results={results}
            value={value}
            resultRenderer={IngredientsSearchResult}
            onKeyDown={this.onKeyDown}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => ({ search: state.search });

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
