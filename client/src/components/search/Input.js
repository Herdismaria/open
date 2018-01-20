import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as searchActions from '../../redux/searchReducer';
import * as placesActions from '../../redux/placesReducer';
import { media } from '../../helpers/media';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  padding-top: 200px;
`;

const StyledInput = styled.input`
  background: transparent;
  border: 3px solid #fff;
  border-radius: 26px;
  box-sizing: border-box;
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
  height: 60px;
  padding: 0 20px;
  width: 60%;
  &:focus {
    outline: none;
  }

  ${media.phone`
    width: 90%;`};
`;

const SearchIcon = styled.span`
  color: #fff;
  font-size: 20px;
  position: absolute;
  right: 28%;

  ${media.phone`
    right: 22%;`};
`;

class Input extends React.Component {
  componentWillMount() {
    this.timer = null;
  }

  // set timeout so that http request is only sent when the user has stopped writing
  handleSearchChange = e => {
    clearTimeout(this.timer);

    const { updateSearchValue } = this.props;
    const value = e.target.value;
    updateSearchValue(value);
    this.timer = setTimeout(() => {
      this.calculateSuggestions(value);
    }, 500);
  };

  // get autocomplete suggestions, if no characters, reset state
  calculateSuggestions = value => {
    const input = this.input;
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
    return (
      <Wrapper
        innerRef={input => {
          this.input = input;
        }}
      >
        <StyledInput onChange={this.handleSearchChange} />
        <SearchIcon className="fa fa-search" />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  search: state.search,
  places: state.places,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...placesActions, ...searchActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);
