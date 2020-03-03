import React from 'react';
import styled from '../styles/styled';

import { LeaderboardItem } from 'MyTypes';
import LeaderboardRow from './LeaderboardRow';

interface LeaderboardWrapperProps {
  teamName?: string;
  trimmed?: boolean;
  positionOffset?: number;
  teamPositionIndex?: number;
}

interface LeaderboardsProps extends LeaderboardWrapperProps {
  leaderboard: LeaderboardItem[];
}

const StyledLeaderboards = styled.div<LeaderboardsProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${p => (p.trimmed ? 'inherit' : '272px')};
  overflow: hidden;
  margin: 0 auto;
  font-weight: bold;
`;

const StyledLeaderboardWrapper = styled.div<LeaderboardWrapperProps>`
  transform: ${p =>
    p.trimmed ? 'inherit' : `translateY(calc(-${p.positionOffset}*36px))`};
  transition: transform 0.5s ease-in;
`;

const Leaderboards: React.FC<LeaderboardsProps> = React.memo(props => {
  const { leaderboard, teamPositionIndex } = props;
  // console.log('Leaderboards rendering');
  console.log(leaderboard);
  console.log(teamPositionIndex);

  const posOffset = () => {
    const leaderboardLength = leaderboard.length;
    let pos;
    pos = teamPositionIndex! - 3;
    if (teamPositionIndex! <= 3) {
      pos = 0;
    } else if (leaderboardLength - teamPositionIndex! <= 3) {
      pos = leaderboardLength - 7;
    }
    return pos;
  };

  return (
    <StyledLeaderboards {...props}>
      <StyledLeaderboardWrapper positionOffset={posOffset()} {...props}>
        {props.leaderboard.map((el, index) => {
          const highlightedTeam = teamPositionIndex === index;
          console.log(highlightedTeam);
          return (
            <LeaderboardRow key={el.team} teamData={el} highlighted={highlightedTeam} />
          );
        })}
      </StyledLeaderboardWrapper>
    </StyledLeaderboards>
  );
});
export default Leaderboards;
