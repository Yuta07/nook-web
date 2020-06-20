import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  img: string;
  width?: string;
  height?: string;
};

export const Logo = ({ img, width, height }: Props) => {
  return <Img src={img} alt="logo" width={width} height={height} />;
};

const Img = styled.img<{ width: Props['width']; height: Props['height'] }>`
  ${({ width, height }) => {
    return css`
      width: ${width ? width : 'auto'};
      height: ${height ? height : 'auto'};
      vertical-align: text-bottom;
    `;
  }}
`;
