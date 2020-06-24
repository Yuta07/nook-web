import * as React from 'react';
import styled, { css } from 'styled-components';
import Moon from '../../assets/moon.svg';
import Sun from '../../assets/sun.svg';

type Props = {
  status: boolean;
  handleSwitchClick: () => void;
};

export const SwitchTheme = ({ status, handleSwitchClick }: Props) => {
  return (
    <Button type="button" name="switch" onClick={handleSwitchClick}>
      <LeftSide status={status}>
        <Image src={Moon} alt="moon" />
      </LeftSide>
      <RightSide status={status}>
        <Image src={Sun} alt="sun" />
      </RightSide>
      <ToggleBall status={status} />
    </Button>
  );
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 24px;
  margin: 0;
  padding: 0.5rem;
  font-size: 0.5rem;
  background-color: #0f1114;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const LeftSide = styled.span<{ status: Props['status'] }>`
  ${({ status }) => {
    return css`
      position: absolute;
      left: 5px;
      height: 100%;
      display: ${status ? 'inline-flex' : 'none'};
      align-items: center;
    `;
  }}
`;

const RightSide = styled.span<{ status: Props['status'] }>`
  ${({ status }) => {
    return css`
      position: absolute;
      right: 5px;
      height: 100%;
      display: ${status ? 'none' : 'inline-flex'};
      align-items: center;
    `;
  }}
`;

const ToggleBall = styled.div<{
  status: Props['status'];
}>`
  ${({ status }) => {
    return css`
      position: absolute;
      top: 1px;
      left: 1px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #ffffff;
      transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0ms;
      transform: ${status ? `translateX(25px)` : 'translateX(0)'};
    `;
  }}
`;

const Image = styled.img`
  width: 16px;
`;
