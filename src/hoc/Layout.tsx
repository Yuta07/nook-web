import React, { FC } from 'react';
import styled from 'styled-components';
import { Header } from '../ui/organisms/Header';
import { WithAuthHeader } from '../ui/organisms/WithAuthHeader';

type Props = {
  loggedIn: boolean;
};

export const Layout: FC<Props> = ({ children, loggedIn }) => {
  return loggedIn ? (
    <Wrapper>
      <WithAuthHeader />
      <Container>{children}</Container>
    </Wrapper>
  ) : (
    <HomeWrapper>
      <Header />
      {children}
    </HomeWrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  margin: 50px auto 0;
  padding: 0 20px;
`;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fbf9f5;
`;
