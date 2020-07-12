import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { EditIcon } from '../atoms/Icon/EditIcon';

type Props = {
  onClick?: () => void;
};

export const EditButton = ({ onClick }: Props) => {
  return (
    <HoverInteraction>
      <EditIcon size={18} onClick={onClick} />
    </HoverInteraction>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HoverInteraction = styled.span`
  ${() => {
    return css`
      display: inline-block;
      position: relative;

      > *:first-child + * {
        display: none;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%) translateY(-12px);
        white-space: nowrap;
      }

      > *:first-child:hover + * {
        display: inline-block;
        animation: ${FadeIn} 0.3s linear;
      }
    `;
  }}
`;
