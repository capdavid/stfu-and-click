import styled from '../../styles/styled';

interface TextProps {
  left?: boolean;
  withPadding?: boolean;
  inline?: boolean;
  error?: boolean;
}

const Text = styled.p<TextProps>`
  display: ${props => (props.inline ? 'inline' : 'inherit')};
  padding: ${props => (props.withPadding ? '1rem' : '0')};
  text-align: ${props => (props.left ? 'left' : 'center')};
  color: ${props => (props.error ? props.theme.colors.lightRed : 'inherit')};
  font-size: ${props => (props.error ? '12px' : 'inherit')};
  margin: 0 auto;
  font-style: italic;
`;

export default Text;
