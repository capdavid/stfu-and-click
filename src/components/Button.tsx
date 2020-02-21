import React from 'react';

import styled from '../styles/styled';

const StyledButton = styled.button`
    width: 200px;
    background: ${p => p.theme.colors.primary};
    height: 20px;
    padding: 2rem;
    border-radius: 7px;
    font-weight: bold;
    font-size: 2rem;
    margin: auto;
    line-height: 0;
    outline: none;
    border: none;
    color: ${p => p.theme.colors.white};
    &:hover {
        background: ${p => p.theme.colors.darkBlue};
    }
`;

const Button: React.FC = props => {
    return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
