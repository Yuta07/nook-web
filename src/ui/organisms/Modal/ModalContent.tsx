import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import CloseImage from '../../../assets/x.svg';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';

type Props = {
  content: React.ReactNode;
  onCloseModal: () => void;
};

export const ModalContent = ({ content, onCloseModal }: Props) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Container themes={theme}>
        <Close onClick={onCloseModal}>
          <CloseImg src={CloseImage} alt="close" />
        </Close>
        {content}
      </Container>
    </Wrapper>
  );
};

const ShowAnimation = keyframes`
  0% {
    top: 500px;
  }
  100% {
    top: 0;
    left: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${ShowAnimation} 0.2s linear 0s 1 normal none running;
`;

const Container = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;

    return css`
      position: absolute;
      z-index: 151;
      width: 400px;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: ${palette[theme].BACKGROUND};
      box-shadow: rgba(150, 150, 150, 0.2) 0px 1px 2px 0px;
      border: 1px solid #cccccc;
      border-radius: 8px;
    `;
  }}
`;

const Close = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
  z-index: 152;
  display: flex;
  cursor: pointer;
`;

const CloseImg = styled.img`
  width: 20px;
  height: 20px;
`;
