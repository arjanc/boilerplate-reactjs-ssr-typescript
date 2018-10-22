import * as React from 'react';
import styled from 'styled-components';
import { media } from './../utils/StyleUtils';
import { BigTitle } from '../ui/bigTitle';
import { PreTitle } from '../ui/preTitle';
import Icon from '../ui/icon';
import Logo from '../ui/logo';

const FrontPageWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  width: 100%;
`;

const FrontPageMain = styled.main`
  text-align: center;
  align-self: center;
`;

const FrontPageFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  
  transition: padding 500ms;
  
  ${media.tablet`
    padding-left: 100px;
  `}
`;

export const Home = () => {
    return (
        <FrontPageWrapper>
            <FrontPageMain>
                <Logo />
                <TitleContainer>
                    <PreTitle>Passionate</PreTitle>
                    <BigTitle>Front-end<br/>developer</BigTitle>
                    <button onClick={() => console.log('Hi there!')}>Press Me!</button>
                </TitleContainer>
            </FrontPageMain>
            <FrontPageFooter>
                <Icon name='big-arrow' color='#000000' size={48} />
            </FrontPageFooter>
        </FrontPageWrapper>
    );
};

export default Home;