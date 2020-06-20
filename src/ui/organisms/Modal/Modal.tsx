import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { usePortal } from '../../../hooks/usePortal';
import { ModalContent } from './ModalContent';

type Props = {
  isOpen: boolean;
  content: ReactNode;
  onCloseModal: () => void;
};

export const Modal = ({ isOpen, content, onCloseModal }: Props) => {
  const el = (
    <>
      <Overlay isOpen={isOpen} onClick={onCloseModal} />
      <ModalContent content={content} onCloseModal={onCloseModal} />
    </>
  );

  const targetPortal = usePortal(el);

  if (!isOpen) return null;

  return targetPortal;
};

const Overlay = styled.div<{ isOpen: Props['isOpen'] }>`
  ${({ isOpen }) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 150;
      width: 100%;
      height: 100%;
      background: rgba(34, 34, 34, 0.5);
      visibility: ${isOpen ? `visible` : `hidden`};
      opacity: ${isOpen ? `1` : `0`};
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    `;
  }}
`;
