import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';

type Props = {
  message: string;
};

export const Error = ({ message }: Props) => {
  const theme = useTheme();

  return <Txt themes={theme}>{message}</Txt>;
};

const Txt = styled.p<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;

    return css`
      color: ${palette[theme].DANGER};
      font-size: 14px;
      margin-bottom: 0;
    `;
  }}
`;
