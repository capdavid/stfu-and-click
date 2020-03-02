import React from 'react';
import styled from '../styles/styled';

import { LeaderboardItem } from 'MyTypes';
import LeaderboardRow from './LeaderboardRow';
import withErrorAndLoading from '../hoc/withErrorAndLoading';

interface LeaderboardWrapperProps {
  teamName?: string;
  trimmed?: boolean;
  positionOffset?: number;
}

interface LeaderboardsProps extends LeaderboardWrapperProps {
  leaderboard: LeaderboardItem[];
}

const StyledLeaderboards = styled.div<LeaderboardsProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${p => (p.trimmed ? 'inherit' : '16.7rem')};
  overflow: hidden;
  margin: 0 auto;
  font-weight: bold;
`;
const StyledLeaderboardWrapper = styled.div<LeaderboardWrapperProps>`
  transform: ${p =>
    p.trimmed ? 'inherit' : `translateY(calc(-${p.positionOffset}*2.2rem))`};
  transition: transform 0.5s ease-in;
`;

const Leaderboards: React.FC<LeaderboardsProps> = React.memo(props => {
  const { leaderboard } = props;
  // console.log('Leaderboards rendering');
  console.log(leaderboard);
  const teamPosition = leaderboard.findIndex(el => el.team === props.teamName);

  const posOffset = () => {
    const leaderboardLength = leaderboard.length;
    let pos;
    pos = teamPosition - 3;
    if (teamPosition <= 3) {
      pos = 0;
    } else if (leaderboardLength - teamPosition <= 3) {
      pos = leaderboardLength - 7;
    }
    return pos;
  };

  return (
    <StyledLeaderboards {...props}>
      <StyledLeaderboardWrapper positionOffset={posOffset()} {...props}>
        {props.leaderboard.map((el, index) => {
          const highlightedTeam = teamPosition === index;
          return (
            <LeaderboardRow key={el.team} teamData={el} highlighted={highlightedTeam} />
          );
        })}
      </StyledLeaderboardWrapper>
    </StyledLeaderboards>
  );
});
//TODO
export default Leaderboards;
// export default withErrorAndLoading(Leaderboards);
