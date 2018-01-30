import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as searchActions from '../../redux/searchReducer';
import { media } from '../../helpers/media';

const InputWrapper = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;

  ${media.phone`
    width: 90%;
  `};
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
  margin: 20px auto;
  padding: 20px;
  width: 100%;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

const SearchIcon = styled.span`
  color: #fff;
  font-size: 20px;
  position: absolute;
  top: 40px;
  right: 30px;
  font-size: 20px;
`;

class Input extends React.Component {
  componentWillMount() {
    this.timer = null;
  }

  componentDidMount() {
    this.input.focus();
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
    const { resetSearch, getResults } = this.props;
    if (value.length === 0) {
      resetSearch();
    } else {
      getResults();
    }
  };

  render() {
    const { value } = this.props.search;

    return (
      <InputWrapper>
        <StyledInput
          onChange={this.handleSearchChange}
          placeholder="Leitaðu að fyrirtæki"
          value={value}
          innerRef={input => (this.input = input)}
        />
        <SearchIcon className="fa fa-search" />
      </InputWrapper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...searchActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);
