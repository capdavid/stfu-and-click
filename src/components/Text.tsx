import styled from '../styles/styled';

interface TextProps {
  left?: boolean;
  withPadding?: boolean;
}

const Text = styled.p<TextProps>`
  padding: ${props => (props.withPadding ? '1rem' : '0')};
  text-align: ${props => (props.left ? 'left' : 'center')};
  margin: 0;
  font-style: italic;
`;

export default Text;
