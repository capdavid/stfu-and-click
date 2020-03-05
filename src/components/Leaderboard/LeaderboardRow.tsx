import styled from '../../styles/styled';
import React from 'react';
import { LeaderboardItem } from 'MyTypes';

import LeaderboardOrderCell from './LeaderboardOrderCell';
import LeaderboardTeamCell from './LeaderboardTeamCell';
import LeaderboardClicksCell from './LeaderboardClicksCell';

interface LeaderboardRowProps {
  teamData: LeaderboardItem;
  highlighted?: boolean;
}

const StyledLeaderboardRow = styled.div<LeaderboardRowProps>`
  display: flex;
  justify-content: center;
  background: ${p => (p.highlighted ? p.theme.colors.primary : p.theme.colors.lightBlue)};
  &:nth-of-type(even) {
    background: ${p =>
      p.highlighted ? p.theme.colors.primary : p.theme.colors.lighterBlue};
  }
  color: ${p => (p.highlighted ? p.theme.colors.white : p.theme.colors.black)};
  font-size: ${p => (p.highlighted ? '24px' : '16px')};
  line-height: 1;
  padding: ${p => (p.highlighted ? '16px 0' : '10px 0')};
`;

const LeaderboardRow: React.FC<LeaderboardRowProps> = props => {
  const { order, team: teamName, clicks } = props.teamData;

  const slicedTeamName = teamName.slice(0, 22);

  return (
    <StyledLeaderboardRow {...props}>
      <LeaderboardOrderCell>{order}</LeaderboardOrderCell>
      <LeaderboardTeamCell>{slicedTeamName}</LeaderboardTeamCell>
      <LeaderboardClicksCell>{clicks}</LeaderboardClicksCell>
    </StyledLeaderboardRow>
  );
};

export default LeaderboardRow;
