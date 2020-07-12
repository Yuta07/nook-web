import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import nookLogo from '../../assets/nook-main-logo.svg';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { LoginForm } from './LoginForm';
import { Modal } from './Modal/Modal';
import { SWITCH_MODAL_STATUS, UiState } from '../../types/ui';

export const Header = () => {
  const { modal }: UiState = useSelector((state) => state['ui']);
  const dispatch = useDispatch();

  const switchModal = useCallback(() => {
    dispatch({ type: SWITCH_MODAL_STATUS, payload: 'login' });
  }, [dispatch]);

  return (
    <Head>
      <Nav>
        <Left>
          <Link to="/">
            <Logo img={nookLogo} width="100px" />
          </Link>
        </Left>
        <Right>
          <Button width="100px" height="36px" handleClick={switchModal}>
            ログイン
          </Button>
          <Modal isOpen={modal.login} content={<LoginForm />} onCloseModal={switchModal} />
        </Right>
      </Nav>
    </Head>
  );
};

const Head = styled.header`
  height: 60px;
  padding: 10px 0;
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
