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
  teamIndex?: number;
}
const heightBasedOnProps = (props: LeaderboardsProps) => {
  if (props.trimmed) {
    return 'inherit';
  } else if (props.teamPositionIndex === -1) {
    return '252px';
  } else {
    return '272px';
  }
};

const StyledLeaderboards = styled.div<LeaderboardsProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${heightBasedOnProps};
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
          return (
            <LeaderboardRow key={el.team} teamData={el} highlighted={highlightedTeam} />
          );
        })}
      </StyledLeaderboardWrapper>
    </StyledLeaderboards>
  );
});
export default Leaderboards;
