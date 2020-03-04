import React from 'react';

import styled from '../../styles/styled';
import Text from './Text';

interface QuoteProps {
  author: string;
}

const Quote: React.FC<QuoteProps> = props => {
  const { author } = props;

  const StyledQuote = styled.div`
    max-width: 500px;
    margin: 1rem auto;
    font-style: italic;
  `;

  const StyledAuthor = styled.p`
    margin-top: 0;
    text-align: right;
    margin-right: 5rem;
  `;

  return (
    <StyledQuote>
      <Text withPadding>{`"${props.children}"`}</Text>
      <StyledAuthor>{`- ${author}`}</StyledAuthor>
    </StyledQuote>
  );
};
export default Quote;
