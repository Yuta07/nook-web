import * as React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';

type Props = {
  label: string;
};

export const Label = ({ label }: Props) => {
  const theme = useTheme();

  return <Text themes={theme}>{label}</Text>;
};

const Text = styled.label<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;

    return css`
      color: ${palette[theme].PRIMARY};
      font-size: 14px;
    `;
  }}
`;
