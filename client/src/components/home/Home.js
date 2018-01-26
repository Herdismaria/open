import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from '../search/Input';
import CardGrid from '../cards/CardGrid';
import { media } from '../../helpers/media';

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  margin: 20px auto;
  transform: translateY(${props => props.transY}px);
  transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);

  ${media.phone`
    width: 95%;
  `};
`;

class Home extends React.Component {
  render() {
    const { value } = this.props.search;
    return (
      <Wrapper transY={value.length === 0 ? 200 : 0}>
        <Input />
        {value.length > 0 ? <CardGrid /> : null}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  search: state.search,
});

export default connect(mapStateToProps)(Home);
