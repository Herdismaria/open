import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../helpers/media';

const Card = styled(Link)`
  background: transparent;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  margin: 5px;
  text-decoration: none;
  transition: height 0.5s;

  ${media.phone`
    height: 90px`};
`;

const Title = styled.h3`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
  word-wrap: break-word;
  margin-bottom: 0;
  padding-bottom: 0;

  ${media.phone`
    font-size: 16px;`};
`;

const Address = styled.h5`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  font-size: 14px;
  letter-spacing: 3px;
  margin-top: 0;
  padding-top: 0;
  word-wrap: break-word;

  ${media.phone`
    font-size: 12px;`};
`;

class SimpleCard extends React.Component {
  render() {
    const { id, title, onClick, address } = this.props;
    return (
      <Card
        innerRef={card => {
          this.card = card;
        }}
        onClick={e => onClick(id, e)}
        to={`/${id}`}
      >
        <Title>{title.split('-').join('\n')}</Title>
        <Address>{address}</Address>
      </Card>
    );
  }
}

export default SimpleCard;
