import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from '../styles/styled';

interface TeamNotFoundProps extends RouteComponentProps<{}, any, { teamName?: string }> {}

const StyledTeamNotFound = styled.div<TeamNotFoundProps>`
  font-size: 2rem;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const TeamNotFound: React.FC<TeamNotFoundProps> = props => {
  useEffect(() => {
    setTimeout(
      () =>
        props.history.push({
          pathname: '/'
        }),
      3000
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const teamName = props.location.state?.teamName;
  return (
    <StyledTeamNotFound {...props}>
      <div>
        Team <strong> {teamName} </strong> not found, do you want to create a new team?
        <br />
        <br />
        Redirecting to home page...
      </div>
    </StyledTeamNotFound>
  );
};

export default withRouter(TeamNotFound);
