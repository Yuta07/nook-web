import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  size: number;
  onClick?: () => void;
};

export const EditIcon = ({ size = 24, onClick }: Props) => (
  <Button onClick={onClick} interaction={onClick ? true : false}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7f8fa6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
      <line x1="3" y1="22" x2="21" y2="22"></line>
    </svg>
  </Button>
);

const Button = styled.div<{ interaction: boolean }>`
  ${({ interaction }) => {
    return css`
      border: none;
      background-color: transparent;

      &:focus {
        outline: none;
      }

      ${interaction &&
      css`
        > svg {
          cursor: pointer;

          &:hover {
            transition: 0.2s;
            stroke: #fbc531;
          }
        }
      `}
    `;
  }}
`;
