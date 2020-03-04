import React, { useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import styled from '../styles/styled';

import Text from './Text';

const StyledInviteLink = styled.div`
  text-align: center;
  position: relative;
  width: 60%;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  outline: none;
  border: 1px solid ${p => p.theme.colors.lightGrey};
  border-radius: 7px;
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  width: 180px;
`;

const StyledCopiedText = styled.span`
  position: absolute;
  top: 0.75rem;
  color: green;
  @media screen and (max-width: ${p => p.theme.media.tablet}px) {
    position: relative;
    display: block;
  }
`;

const InviteLink: React.FC = () => {
  const [copyState, setCopyState] = useState(false);
  const InviteLinkRef = useRef<HTMLInputElement>(null);

  const handleCopyToClipboard = () => {
    copy(InviteLinkRef.current!.value);
    setCopyState(true);
    setTimeout(() => setCopyState(false), 2000);
  };

  return (
    <StyledInviteLink>
      <Text inline>Too lazy to click? Let your pals click for you:</Text>
      <StyledInput
        readOnly
        value={window.location.href}
        ref={InviteLinkRef}
        onClick={handleCopyToClipboard}
      />
      {copyState ? <StyledCopiedText>Copied!</StyledCopiedText> : null}
    </StyledInviteLink>
  );
};

export default InviteLink;
