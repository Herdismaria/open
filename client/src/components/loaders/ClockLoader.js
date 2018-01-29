import React from 'react';
import styled from 'styled-components';
import animations from '../../animations/animation';

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
`;

const Clock = styled.div`
  border: 4px solid #48c0d3;
  border-radius: 60px;
  height: 50px;
  margin: 0 auto;
  width: 50px;
  position: relative;

  &:after {
    background-color: #48c0d3;
    border-radius: 5px;
    content: '';
    height: 23px;
    left: 46%;
    position: absolute;
    top: 3px;
    width: 4px;
    transform-origin: 50% 97%;

    animation: ${animations.tick} 60s linear infinite;
  }

  &:before {
    background-color: #48c0d3;
    border-radius: 5px;
    content: '';
    height: 21px;
    left: 46%;
    position: absolute;
    top: 6px;
    width: 4px;
    transform-origin: 50% 94%;

    animation: ${animations.tick} 624s linear infinite;
  }
`;

const ClockLoader = props => {
  return <Clock />;
};

export default ClockLoader;
