import styled from 'styled-components';
import { media, sizes } from './../utils/StyleUtils';

export const PreTitle = styled.span`
  font-size: ${(48 / ((sizes.tablet -1) / 100))}vw;
  font-weight: 400;
  
  ${media.tablet`
    font-size: 48px;
  `}
`;