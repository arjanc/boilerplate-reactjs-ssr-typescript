import * as React from 'react';
import styled from 'styled-components';
import { BigTitle } from './../ui/bigTitle';
import { PreTitle } from './../ui/preTitle';

const FrontPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

const FrontPageHeader = styled.header`
  text-align: center;
  align-self: center;
`;

const TitleContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
`;

export const Home = () => {
  return (
    <FrontPageWrapper>
      <FrontPageHeader>
        <TitleContainer>
          <PreTitle>Passionate</PreTitle>
          <BigTitle>Front-end<br/>developer</BigTitle>
        </TitleContainer>
      </FrontPageHeader>
      <button onClick={() => console.log('Hi there!')}>Press Me!</button>
    </FrontPageWrapper>
  );
};

export default Home;