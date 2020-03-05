import React from 'react';
import styled from '../../styles/styled';

import LeaderboardOrderCell from './LeaderboardOrderCell';
import LeaderboardTeamCell from './LeaderboardTeamCell';
import LeaderboardClicksCell from './LeaderboardClicksCell';

const StyledLeaderboardHeading = styled.div`
  display: flex;
  justify-content: center;
  color: ${p => p.theme.colors.grey};
  padding: 0.2rem 0;
  font-weight: bold;
`;

const LeaderboardHeading = () => (
  <StyledLeaderboardHeading>
    <LeaderboardOrderCell>#</LeaderboardOrderCell>
    <LeaderboardTeamCell>TEAM</LeaderboardTeamCell>
    <LeaderboardClicksCell>CLICKS</LeaderboardClicksCell>
  </StyledLeaderboardHeading>
);

export default LeaderboardHeading;
