import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../themes/Theme';
import { Header } from '../ui/organisms/Header';
import { WithAuthHeader } from '../ui/organisms/WithAuthHeader';

export const Layout: FC = ({ children }) => {
  const theme = useTheme();
  const loggedIn = false;

  return loggedIn ? (
    <Wrapper>
      <WithAuthHeader />
      {children}
    </Wrapper>
  ) : (
    <HomeWrapper themes={theme}>
      <Header />
      {children}
    </HomeWrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const HomeWrapper = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    console.log(themes);
    return css`
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: #fbf9f5;
    `;
  }}
`;
