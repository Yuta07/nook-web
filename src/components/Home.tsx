import React from 'react';
import styled from 'styled-components';
import HomeImg from '../assets/home-img.svg';
import { Button } from '../ui/atoms/Button';

export const Home = () => {
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
        <Button width="120px" height="40px" background="SUCCESS">
          Sign up free
        </Button>
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
