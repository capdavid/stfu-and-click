import React from 'react';
import styled from '../styles/styled';
import { colors } from '../styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

const StyledError = styled.p`
  color: ${colors.lightRed};
  font-weight: bold;
  text-align: center;
  width: 80%;
  margin: 3rem auto;
`;

const withError = <T extends object>(Component: React.FC<T>): React.FC<T> => props => {
  const error = useSelector((state: RootState) => state.game.error);

  if (!error) {
    return <Component {...(props as T)} />;
  }
  return <StyledError>Something went wrong.. Try to reload the page.</StyledError>;
};
export default withError;
