import styled from '../../styles/styled';

const GameWrapper = styled.div`
  margin: 2rem auto;
  width: 80%;
  max-width: 500px;
  border: 4px solid ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.white};
  border-radius: 7px;
`;

export default GameWrapper;
