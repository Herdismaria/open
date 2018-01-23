import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from '../../helpers/media';
import animations from '../../animations/animation';
import ClockLoader from '../loaders/ClockLoader';

const Card = styled(Link)`
  background: transparent;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 60%;
  height: 100px;
  margin: 5px;
  text-decoration: none;
  transition: height 0.5s;

  ${media.phone`
    flex: 0 0 100%;
    height: 80px`};
`;

const Title = styled.h3`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
`;

const SimpleCard = ({ id, title, onClick }) => {
  return (
    <Card
      innerRef={card => {
        this.card = card;
      }}
      onClick={e => onClick(id, e)}
      to={`/${id}`}
    >
      <Title>{title}</Title>
    </Card>
  );
};

export default SimpleCard;
