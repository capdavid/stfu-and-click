import React from 'react';

import styled from '../styles/styled';
import Text from './Text';

const Footer: React.FC = () => {
    const StyledFooter = styled.div`
        position: absolute;
        bottom: 0;
        margin: 1rem auto;
        width: 100%;
    `;

    return (
        <StyledFooter>
            <Text>
                If you don't like this page, it's <a href="https://applifting.io">Applifting's</a> fault.
            </Text>
        </StyledFooter>
    );
};
export default Footer;
