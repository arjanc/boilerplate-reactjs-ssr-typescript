import styled from 'styled-components';
import { media } from './../utils/StyleUtils';

export const BigTitle = styled.h1`
  font-size: 15vw;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 12vw;
  margin: 0;
  
  ${media.tablet`
    font-size: 96px;
    line-height: 80px;
  `}
`;