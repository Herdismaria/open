import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { media } from '../../helpers/media';
import { getOpeningHours } from '../../helpers/openingHours';
import * as placesActions from '../../redux/placesReducer';
import ErrorBoundary from '../error/ErrorBoundary';

const Wrapper = styled.div`
  align-items: space-between;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  font-family: 'Dosis', sans-serif;
  letter-spacing: 3px;
  margin: 50px auto;
  overflow: hidden;
  padding: 10px;
  position: relative;
  text-align: center;
  width: 60%;

  ${media.phone`
    width: 80%`};
`;

const Cross = styled(Link)`
  padding: 15px;
  &::after {
    content: '';
    height: 20px;
    width: 3px;
    background: #fff;
    position: absolute;
    right: 30px;
    top: 20px;
    transform: rotate(45deg);
  }

  &::before {
    content: '';
    height: 20px;
    width: 3px;
    background: #fff;
    position: absolute;
    right: 30px;
    top: 20px;
    transform: rotate(-45deg);
  }
`;

const Divider = styled.div`
  background: #fff;
  height: 2px;
  margin: 10px auto;
  width: 70%;
  box-shadow: 5px 5px 10px #50a7c2;
`;

const Title = styled.h2`
  font-size: 22px;
  ${media.phone`
    font-size: 18px;`};
`;

const Info = styled.p`
  padding: 0;
  margin: 2px auto;

  ${media.phone`
    font-size: 14px;`};
`;

const OpeningHoursText = styled.p`
  padding: 0;
  margin: 5px auto;

  ${media.phone`
    font-size: 14px;`};
`;

const OpeningHoursWrapper = styled.div`
  margin: 10px auto;
`;

const WebsiteLink = styled.a`
  color: #fff;
  cursor: pointer;
  margin: 2px auto;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  ${media.phone`
    font-size: 14px;`};
`;

const StatusLabel = styled.p`
  border: 2px solid;
  border-color: ${props => (props.open ? 'green' : 'red')};
  border-radius: 10px;
  color: ${props => (props.open ? 'green' : 'red')};
  font-size: 10px;
  margin: 0 auto;
  padding: 4px;
  font-size: 10px;
  text-align: center;
  width: 40px;
`;

class Details extends React.Component {
  handleClick = e => {
    this.props.resetPlace();
  };

  render() {
    const { isLoading, place } = this.props.place;
    // if user tries to access detail page without going  through the search
    if (!isLoading && place.length === 0) {
      return <Redirect to="/" />;
    }

    const {
      address,
      internationalPhoneNumber,
      name,
      website,
      openingHours,
    } = this.props.place.place;

    const status = openingHours ? openingHours['open_now'] : undefined;

    return isLoading ? null : (
      <ErrorBoundary>
        <Wrapper>
          <Cross to="/" onClick={this.handleClick} />
          <Title>{name}</Title>
          {openingHours ? (
            <StatusLabel open={status}>{status ? 'Opið' : 'lokað'}</StatusLabel>
          ) : null}
          <Divider />
          <OpeningHoursWrapper>
            {openingHours
              ? getOpeningHours(openingHours.periods).map(e => (
                  <OpeningHoursText key={e}>{e}</OpeningHoursText>
                ))
              : 'Engar upplýsingar um opnunartíma fundust'}
          </OpeningHoursWrapper>

          <Divider />
          <Info>{address}</Info>
          <Info>{internationalPhoneNumber}</Info>
          <WebsiteLink href={website}>{website}</WebsiteLink>
        </Wrapper>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state, props) => ({
  place: state.places,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...placesActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
