import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as searchActions from '../../redux/searchReducer';
import { media, states } from '../../helpers/media';
import animations from '../../animations/animation';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  transform: translateY(${props => props.transY}px);
  transition: transform 0.5s ease ${props => props.delay}s;
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
  position: relative;
  width: 60%;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }

  ${media.phone`
    width: 90%;`};
`;

const SearchIcon = styled.span`
  color: #fff;
  font-size: 20px;
  position: absolute;
  right: 23%;

  ${media.phone`
    right: 12%;`};
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
    }, 1000);
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
    const { results, value } = this.props.search;

    return (
      <Wrapper
        transY={results.length === 0 ? 100 : 0}
        //delay={results.length === 0 ? 0.5 : 0}
      >
        <StyledInput
          onChange={this.handleSearchChange}
          placeholder="Leitaðu að fyrirtæki"
          value={value}
        />
        <SearchIcon className="fa fa-search" />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...searchActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);
