import React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/media';
import animation from '../../animations/animation';
import { findDOMNode } from 'react-dom';
import { TweenMax } from 'gsap';

const Card = styled.div`
  background: transparent;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 400px;
  height: 100px;
  margin: 5px;
  width: 50px;

  ${media.phone`
    flex: 0 0 300px;`};
`;

const Title = styled.h3`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
`;

class SimpleCard extends React.Component {
  componentWillEnter(cb) {
    let el = this.card;
    animation.cardEntrance(el, this.props.delay, cb);
    el = null;
  }

  componentWillLeave(cb) {
    let el = this.card;
    animation.cardExit(el, this.props.delay, cb);
    el = null;
  }

  render() {
    const { title } = this.props;
    return (
      <Card
        innerRef={card => {
          this.card = card;
        }}
      >
        <Title>{title}</Title>
      </Card>
    );
  }
}

export default SimpleCard;
