import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';

type Props = {
  color?: string;
  position?: {
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  width?: string;
  height?: string;
};

type MessageProps = {
  message: string;
};

type WithMessageProps = Props & MessageProps;

export const Spinner = ({ color = 'MAIN', position, width, height }: Props) => {
  const themes = useTheme();

  return <Loader color={color} posi={position} width={width} height={height} themes={themes} />;
};

export const SpinnerWithMessage = ({ color = 'MAIN', message, position, width, height }: WithMessageProps) => {
  const themes = useTheme();

  return (
    <Container posi={position}>
      <Loader color={color} width={width} height={height} themes={themes} />
      <Message>{message}</Message>
    </Container>
  );
};

// ref: [https://projects.lukehaas.me/css-loaders/]

const Container = styled.div<{ posi: Props['position'] }>`
  ${({ posi }) => {
    const { position, top, bottom, left, right } = posi !== undefined && posi;

    return css`
      ${
        position && (top || left || right || bottom)
          ? css`
              position: ${position};
              z-index: 200;
            `
          : css`
              position: relative;
            `
      }
      ${
        position &&
        top &&
        css`
          top: ${top};
        `
      }
      ${
        position &&
        bottom &&
        css`
          bottom: ${bottom};
        `
      }
      ${
        position &&
        right &&
        css`
          right: ${right};
        `
      }
      ${
        position &&
        left &&
        css`
          left: ${left};
        `
      }
    `;
  }}
`;

const LoaderSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div<{
  color: Props['color'];
  posi?: Props['position'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ color, posi, width, height, themes }) => {
    const { palette, theme } = themes;
    const { position, top, bottom, left, right } = posi !== undefined && posi;

    return css`
      width: ${width ? width : '2.5rem'};
      height: ${height ? height : '2.5rem'};
      font-size: 5px;
      border-radius: 50%;
      border-top: 0.3rem solid rgba(218, 218, 218, 0.2);
      border-right: 0.3rem solid rgba(218, 218, 218, 0.2);
      border-bottom: 0.3rem solid rgba(218, 218, 218, 0.2);
      border-left: 0.3rem solid ${palette[theme][color]};
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: ${LoaderSpin} 1.2s infinite linear;
      animation: ${LoaderSpin} 1.2s infinite linear;

      ${
        position && (top || left || right || bottom)
          ? css`
              position: ${position};
              z-index: 200;
            `
          : css`
              position: relative;
            `
      }
      ${
        position &&
        top &&
        css`
          top: ${top};
        `
      }
      ${
        position &&
        bottom &&
        css`
          bottom: ${bottom};
        `
      }
      ${
        position &&
        right &&
        css`
          right: ${right};
        `
      }
      ${
        position &&
        left &&
        css`
          left: ${left};
        `
      }
    `;
  }}
`;

const Message = styled.span`
  position: absolute;
  top: 50px;
  left: -50%;
  font-size: 14px;
  white-space: nowrap;
`;
