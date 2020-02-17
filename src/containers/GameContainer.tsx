import React from 'react';

import styled from '../styles/styled';
import TeamForm from '../components/TeamForm';

// interface GameContainerProps {
//     theme: Theme;
// }
const StyledGameContainer = styled.div`
    margin: 1rem auto;
    width: 500px;
    border: 2px solid ${p => p.theme.colors.primary};
    border-radius: 7px;
`;

const GameContainer: React.FC = props => {
    return (
        <StyledGameContainer>
            <TeamForm />
            {/* <Leaderboards /> */}
        </StyledGameContainer>
    );
};

export default GameContainer;
