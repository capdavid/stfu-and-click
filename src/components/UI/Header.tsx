import React from 'react';
import styled from '../../styles/styled';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  margin: 0;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-family: 'Montserrat', 'Roboto';
  font-size: 1.5rem;
  font-weight: 900;
  background: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Header: React.FC = props => (
  <StyledLink to="/">
    <StyledHeader>{props.children}</StyledHeader>
  </StyledLink>
);

export default Header;
