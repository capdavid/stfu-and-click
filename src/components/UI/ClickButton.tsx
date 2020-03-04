import React from 'react';

import styled from '../../styles/styled';
import { media } from '../../styles/theme';

interface ClickButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  large?: boolean;
}

const StyledButton = styled.button<ClickButtonProps>`
  width: 95%;
  height: auto;
  display: block;
  flex: ${p => (p.large ? 'inherit' : '4')};
  background: ${p => p.theme.colors.primary};
  border-radius: 7px;
  font-weight: bold;
  font-size: 2rem;
  margin: ${p => (p.large ? '1rem auto' : '0')};
  padding: ${p => (p.large ? '3rem' : '0')};
  text-align: center;
  line-height: 0;
  outline: none;
  border: none;
  color: ${p => p.theme.colors.white};
  &:hover {
    background: ${p => p.theme.colors.darkBlue};
  }
  @media screen and (max-width: ${media.phone}px) {
    flex: inherit;
    height: 3rem;
    width: 220px;
  }
`;

const ClickButton: React.FC<ClickButtonProps> = props => {
  return <StyledButton {...props}>CLICK!</StyledButton>;
};

export default ClickButton;
