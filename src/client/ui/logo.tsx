import * as React from 'react';
import styled from 'styled-components';

const StyledLogoWrapper = styled.div`
    width: 100px;
    height: 100px;
    background: red;
`;
const Logo = () => (
    <StyledLogoWrapper>
        logo
    </StyledLogoWrapper>
);

export default Logo;
