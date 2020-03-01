import styled from '../styles/styled';
import React from 'react';
import { LeaderboardItem } from 'MyTypes';

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
  font-size: ${p => (p.highlighted ? '1.5rem' : '1rem')};
  line-height: 1;
  padding: ${p => (p.highlighted ? '1rem 0' : '0.6rem 0')};
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

const LeaderboardRow: React.FC<LeaderboardRowProps> = props => {
  const { order, team: teamName, clicks } = props.teamData;

  return (
    <StyledLeaderboardRow {...props}>
      <StyledOrderCell>{order}</StyledOrderCell>
      <StyledTeamCell>{teamName.slice(0, 20)}</StyledTeamCell>
      <StyledClicksCell>{clicks}</StyledClicksCell>
    </StyledLeaderboardRow>
  );
};

export default LeaderboardRow;
