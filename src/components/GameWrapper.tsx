import styled from '../styles/styled';

const GameWrapper = styled.div`
    margin: 1rem auto;
    width: 500px;
    border: 4px solid ${p => p.theme.colors.primary};
    background: ${p => p.theme.colors.white};
    border-radius: 7px;
`;

export default GameWrapper;
