import React from 'react';
import styled from '../styles/styled';
import ScoreNumber from './ScoreNumber';
import withErrorAndLoading from '../hoc/withErrorAndLoading';

import Text from './Text';

interface ScoreWrapperProps {
  personalScore: string;
  teamScore: string;
}

const StyledScoreWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem auto;
`;

const StyledScoreDiv = styled.div`
  text-align: center;
`;

const ScoreWrapper: React.FC<ScoreWrapperProps> = props => {
  return (
    <StyledScoreWrapper>
      <StyledScoreDiv>
        <Text>Your Clicks:</Text>
        <ScoreNumber>{props.personalScore}</ScoreNumber>
      </StyledScoreDiv>
      <StyledScoreDiv>
        <Text>Team Clicks:</Text>
        <ScoreNumber>{props.teamScore}</ScoreNumber>
      </StyledScoreDiv>
    </StyledScoreWrapper>
  );
};
//TODO

// export default withErrorAndLoading(ScoreWrapper);
export default ScoreWrapper;
