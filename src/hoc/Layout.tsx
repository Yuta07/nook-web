import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from '../components/Home';
import { NoMatch } from '../components/NoMatch';
import { routes } from '../config/route';
import { Header } from '../ui/organisms/Header';
import { WithAuthHeader } from '../ui/organisms/WithAuthHeader';

type Props = {
  loggedIn: boolean;
};

export const Layout: FC<Props> = ({ loggedIn }) => {
  return loggedIn ? (
    <Wrapper>
      <WithAuthHeader />
      <Container>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Container>
    </Wrapper>
  ) : (
    <HomeWrapper>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="*" component={NoMatch} />
      </Switch>
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
