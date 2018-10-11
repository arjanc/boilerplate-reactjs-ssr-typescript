import styled from 'styled-components';
import { media, sizes } from './../utils/StyleUtils';

export const BigTitle = styled.h1`
  font-size: ${(96/( (sizes.tablet - 1) / 100))}vw;
  font-weight: 900;
  text-transform: uppercase;
  line-height: ${(80/( (sizes.tablet - 1) / 100))}vw;
  margin: 0;
  
  ${media.tablet`
    font-size: 96px;
    line-height: 80px;
  `}
`;