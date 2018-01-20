import React from 'react';
import styled from 'styled-components';
import { media } from '../../helpers/media';
import animations from '../../animations/animation';

const Card = styled.div`
  background: transparent;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 60%;
  height: ${props => props.height}px;
  margin: 5px;
  transition: flex-basis 0.5s;
  transition: height 0.5s;

  ${media.phone`
    flex: 0 0 100%;`};
`;

const Title = styled.h3`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
`;

class SimpleCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  componentWillEnter(cb) {
    let el = this.card;
    animations.cardEntrance(el, this.props.delay, cb);
  }

  componentWillLeave(cb) {
    let el = this.card;
    this.setState(prev => ({ open: false }));
    animations.cardExit(el, this.props.delay, cb);
  }

  onClick = () => {
    this.setState(prev => ({ open: !prev.open }));
    if (!this.state.open) {
      this.props.fetchPlace(this.props.id);
    }
  };

  render() {
    const { title } = this.props;
    return (
      <Card
        innerRef={card => {
          this.card = card;
        }}
        onClick={this.onClick}
        height={this.state.open ? 400 : 100}
      >
        <Title>{title}</Title>
      </Card>
    );
  }
}

export default SimpleCard;
