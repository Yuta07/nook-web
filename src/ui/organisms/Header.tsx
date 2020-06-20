import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import nookLogo from '../../assets/nook-main-logo.svg';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';

export const Header = () => {
  return (
    <Head>
      <Nav>
        <Left>
          <Link to="/">
            <Logo img={nookLogo} width="100px" />
          </Link>
        </Left>
        <Right>
          <Button width="80px" height="32px">
            Log in
          </Button>
        </Right>
      </Nav>
    </Head>
  );
};

const Head = styled.header`
  height: 60px;
  padding-top: 15px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 750px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Left = styled.div``;

const Right = styled.div``;
