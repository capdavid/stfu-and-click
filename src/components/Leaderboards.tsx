import React from 'react';
import styled from '../styles/styled';

interface LeaderboardsProps {
    leaderboard: any;
}

const StyledLeaderboards = styled.div<LeaderboardsProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    font-weight: bold;
`;

const StyledLeaderboardItem = styled.div`
    display: flex;
    justify-content: center;
    background: ${p => p.theme.colors.lightBlue};
    &:nth-of-type(even) {
        background: ${p => p.theme.colors.lighterBlue};
    }
    padding: 0.5rem 0;
`;

const StyledOrderCell = styled.div`
    flex: 1;
    text-align: center;
`;
const StyledTeamCell = styled.div`
    flex: 5;
    text-align: left;
    overflow: hidden;
`;
const StyledClicksCell = styled.div`
    flex: 2;
    text-align: right;
    margin: 0 1rem 0 0;
`;

const Leaderboards: React.FC<LeaderboardsProps> = props => {
    console.log(props.leaderboard);
    return (
        <StyledLeaderboards {...props}>
            {props.leaderboard.map((el: any) => (
                <StyledLeaderboardItem key={el.order}>
                    <StyledOrderCell>{el.order}</StyledOrderCell>
                    <StyledTeamCell>{el.team}</StyledTeamCell>
                    <StyledClicksCell>{el.clicks}</StyledClicksCell>
                </StyledLeaderboardItem>
            ))}
        </StyledLeaderboards>
    );
};

export default Leaderboards;
