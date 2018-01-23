import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Clock from '../loaders/ClockLoader';

const Nav = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  font-family: 'Dosis', sans-serif;
  height: 80px;
  justify-content: space-between;
  letter-spacing: 3px;
  width: 100%;
`;

const Logo = styled.span`
  display: block;
  font-size: 70px;
  color: #48c0d3;
  padding-left: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 20px;
`;

const NavLink = styled(Link)`
  color: #48c0d3;
  text-decoration: none;
`;

const Navbar = props => {
  return (
    <div>
      <Nav>
        <Logo>
          <Clock />
        </Logo>
        <NavLinks>
          <NavLink to="/">Hafðu Samband</NavLink>
        </NavLinks>
      </Nav>
    </div>
  );
};

export default Navbar;
