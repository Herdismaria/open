import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as placesActions from '../../redux/placesReducer';

const Wrapper = styled.div`
  align-items: space-between;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  font-family: 'Dosis', sans-serif;
  letter-spacing: 3px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 60%;
`;

const Cross = styled(Link)`
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
`;

const Info = styled.p`
  padding: 0;
  margin: 2px auto;
`;

class Details extends React.Component {
  handleClick = e => {
    console.log(this.props);
    this.props.resetPlace();
  };

  render() {
    const {
      address,
      internationalPhoneNumber,
      name,
      website,
      openingHours,
    } = this.props.place.place;
    console.log(this.props);
    return (
      <Wrapper>
        <Cross to="/" onClick={this.handleClick} />
        <Title>Smáralind</Title>
        <Divider />
        <div>
          <p>Mánudagar: 12:00 - 18:00</p>
          <p>Mánudagar: 12:00 - 18:00</p>
          <p>Mánudagar: 12:00 - 18:00</p>
          <p>Mánudagar: 12:00 - 18:00</p>
          <p>Mánudagar: 12:00 - 18:00</p>
          <p>Mánudagar: 12:00 - 18:00</p>
          <p>Mánudagar: 12:00 - 18:00</p>
        </div>
        <Divider />
        <Info>Engihjalli 8, 200 Kópavogur</Info>
        <Info>+354 699-3004</Info>
        <Info>http://Website.com</Info>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  place: state.places,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ ...placesActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
