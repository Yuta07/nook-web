import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import nookLogo from '../../assets/nook-main-logo.svg';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { LoginForm } from './LoginForm';
import { Modal } from './Modal/Modal';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Head>
      <Nav>
        <Left>
          <Link to="/">
            <Logo img={nookLogo} width="100px" />
          </Link>
        </Left>
        <Right>
          <Button width="100px" height="36px" handleClick={isOpenModal}>
            ログイン
          </Button>
          <Modal isOpen={isOpen} content={<LoginForm />} onCloseModal={onCloseModal} />
        </Right>
      </Nav>
    </Head>
  );
};

const Head = styled.header`
  height: 60px;
  padding-top: 15px;
  background-color: #ffffff;
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
