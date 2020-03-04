import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from '../styles/styled';

interface TeamNotFoundProps extends RouteComponentProps<{}, {}, { teamName?: string }> {}

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
      3500
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const teamName = props.location.state?.teamName;
  return (
    <StyledTeamNotFound {...props}>
      <div>
        Team <strong> {teamName} </strong> not found, but good news you can create one!
        <br />
        <br />
        Redirecting to home page...
      </div>
    </StyledTeamNotFound>
  );
};

export default withRouter(TeamNotFound);
