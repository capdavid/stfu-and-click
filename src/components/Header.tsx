import styled from '../styles/styled';

const Header = styled.header`
  margin: 0;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-family: 'Montserrat', 'Roboto';
  font-size: 1.5rem;
  font-weight: 900;
  background: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

export default Header;
