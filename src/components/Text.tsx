import styled from '../styles/styled';

interface TextProps {
    left?: boolean;
}

const Text = styled.p<TextProps>`
    padding: 1rem;
    text-align: ${props => (props.left ? 'left' : 'center')};
    margin: 0;
    font-style: italic;
`;

export default Text;
