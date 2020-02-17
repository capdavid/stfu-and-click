import React from 'react';

import styled from '../styles/styled';

const StyledButton = styled.button`
    width: 100px;
    background: ${p => p.theme.colors.primary};
    height: 20px;
`;

const Button: React.FC = props => {
    return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
