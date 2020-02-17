import React from 'react';
import styled from '../styles/styled';

import Text from './Text';
import Button from './Button';

interface TeamFormProps {
    onNameRegister?: () => void;
}

const StyledInput = styled.input`
    outline: none;
    border: 1px solid ${p => p.theme.colors.lightGrey};
    border-radius: 7px;
    padding: 0.5rem;
    margin: 0 0.5rem 1rem 0.5rem;
    width: 200px;
`;

const TeamForm: React.FC<TeamFormProps> = props => {
    return (
        <form onSubmit={props.onNameRegister}>
            <label htmlFor="teamName">
                <Text left>Enter your team name: </Text>
            </label>
            <StyledInput placeholder="Your mom" type="text" name="teamName" />
            <Button>CLICK!</Button>
        </form>
    );
};

export default TeamForm;
