import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import HomeImg from '../assets/home-img.svg';
import { Title } from '../hooks/useHelmet';
import { SWITCH_MODAL_STATUS, UiState } from '../types/ui';
import { Button } from '../ui/atoms/Button';
import { Modal } from '../ui/organisms/Modal/Modal';
import { SignupForm } from '../ui/organisms/SignupForm';

export const Home = () => {
  const { modal }: UiState = useSelector((state) => state['ui']);
  const dispatch = useDispatch();

  const switchModal = useCallback(() => {
    dispatch({ type: SWITCH_MODAL_STATUS, payload: 'signup' });
  }, [dispatch]);

  return (
    <>
      <Title title="ホーム" />
      <Main>
        <Hero>
          Arrange your idea, <br />
          task and document.
        </Hero>
        <Description>
          The Service is for private management. <br />
          Leave it in nook of your head.
        </Description>
        <SignupContainer>
          <Button width="100px" height="40px" background="SUCCESS" handleClick={switchModal}>
            はじめる
          </Button>
          <Modal isOpen={modal.signup} content={<SignupForm />} onCloseModal={switchModal} />
        </SignupContainer>
        <Image src={HomeImg} alt="home-image" />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  margin: 80px auto 0;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Hero = styled.h2`
  font-size: 36px;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 20px;
`;

const SignupContainer = styled.div`
  margin-top: 30px;
`;

const Image = styled.img`
  position: absolute;
  bottom: 85px;
  width: 500px;
  height: auto;
`;
