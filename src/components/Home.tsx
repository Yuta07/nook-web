import React, { useState } from 'react';
import styled from 'styled-components';
import HomeImg from '../assets/home-img.svg';
import { Button } from '../ui/atoms/Button';
import { Modal } from '../ui/organisms/Modal/Modal';
import { SignupForm } from '../ui/organisms/SignupForm';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
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
        <Button width="100px" height="40px" background="SUCCESS" handleClick={isOpenModal}>
          はじめる
        </Button>
        <Modal isOpen={isOpen} content={<SignupForm />} onCloseModal={onCloseModal} />
      </SignupContainer>
      <Image src={HomeImg} alt="home-image" />
    </Main>
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
