import styled from '../../styles/styled';

interface TextProps {
  left?: boolean;
  withPadding?: boolean;
  inline?: boolean;
}

const Text = styled.p<TextProps>`
  display: ${props => (props.inline ? 'inline' : 'inherit')};
  padding: ${props => (props.withPadding ? '1rem' : '0')};
  text-align: ${props => (props.left ? 'left' : 'center')};
  margin: 0 auto;
  font-style: italic;
`;

export default Text;
