import * as React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';

export type Props = {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  children?: React.ReactNode;
  color?: string;
  background?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Button = ({
  type = 'button',
  name,
  children,
  color = 'SECONDARY',
  background = 'MAIN',
  width,
  height,
  disabled = false,
  handleClick,
}: Props) => {
  const theme = useTheme();

  return (
    <Base
      type={type}
      name={name}
      background={background}
      color={color}
      width={width}
      height={height}
      disabled={disabled}
      themes={theme}
      onClick={handleClick}
    >
      {children}
    </Base>
  );
};

export const Base = styled.button<{
  color?: Props['color'];
  background?: Props['background'];
  width?: Props['width'];
  height?: Props['height'];
  themes: Theme;
}>`
  ${({ color, background, width, height, themes }) => {
    const { palette, theme } = themes;

    return css`
      width: ${width ? width : 'auto'};
      height: ${height ? height : 'auto'};
      font-size: 14px;
      color: ${palette[theme][color]};
      background-color: ${palette[theme][background]};
      border: none;
      border-radius: 4px;
      padding: 6px 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
        transition: 0.3s;
      }

      &:focus {
        outline: none;
      }
    `;
  }}
`;
