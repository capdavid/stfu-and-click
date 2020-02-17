import styled from '../styles/styled';

const Header = styled.p`
    margin: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 900;
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
`;

export default Header;
