import React from 'react';
import styled from '../styles/styled';
import { media } from '../styles/theme';

import Text from './Text';
import ClickButton from './ClickButton';

interface TeamFormProps {
  onGameStart: (e: React.FormEvent) => void;
  teamNameRef: React.MutableRefObject<HTMLInputElement | null>;
}

const StyledTeamForm = styled.form`
  display: flex;
  margin: 1rem;

  @media screen and (max-width: ${media.phone}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledFormDiv = styled.div`
  flex: 7;
  @media screen and (max-width: ${media.phone}px) {
    flex: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${p => p.theme.colors.lightGrey};
  border-radius: 7px;
  padding: 0.5rem;
  margin: 0.5rem 0 0 0;
  width: 95%;
  @media screen and (max-width: ${media.phone}px) {
    width: 220px;
  }
`;

const TeamForm: React.FC<TeamFormProps> = props => {
  return (
    <StyledTeamForm onSubmit={e => props.onGameStart(e)}>
      <StyledFormDiv>
        <label htmlFor="teamName">
          <Text left>Enter your team name: </Text>
        </label>
        <StyledInput
          placeholder="Your mom"
          type="text"
          name="teamName"
          ref={props.teamNameRef}
        />
      </StyledFormDiv>
      <ClickButton type="submit" />
    </StyledTeamForm>
  );
};

export default TeamForm;
