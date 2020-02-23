import React from 'react';
import styled from '../styles/styled';

import Text from './Text';
import ClickButton from './ClickButton';

interface TeamFormProps {
    onGameStart: (e: React.FormEvent) => void;
    teamNameRef: React.MutableRefObject<HTMLInputElement | null>;
}

const StyledTeamForm = styled.form`
    display: flex;
    margin: 1rem;
`;

const StyledFormDiv = styled.div`
    flex: 7;
`;

const StyledInput = styled.input`
    outline: none;
    border: 1px solid ${p => p.theme.colors.lightGrey};
    border-radius: 7px;
    padding: 0.5rem;
    margin: 0.5rem 0 0 0;
    width: 85%;
`;

const TeamForm: React.FC<TeamFormProps> = props => {
    return (
        <StyledTeamForm onSubmit={e => props.onGameStart(e)}>
            <StyledFormDiv>
                <label htmlFor="teamName">
                    <Text left>Enter your team name: </Text>
                </label>
                <StyledInput placeholder="Your mom" type="text" name="teamName" ref={props.teamNameRef} />
            </StyledFormDiv>
            <ClickButton type="submit" />
        </StyledTeamForm>
    );
};

export default TeamForm;
