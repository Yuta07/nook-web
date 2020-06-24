import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Emoji } from './Emoji';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';
import { Tag } from '../../types/project';

type Props = {
  tag: Tag;
};

export const TagImage = ({ tag }: Props) => {
  const theme = useTheme();

  let image: ReactNode;
  switch (tag) {
    case 'エンジニアリング':
      image = <Emoji label="computer" symbol="👨‍💻" />;
      break;
    case 'ワークアウト':
      image = <Emoji label="athletic_shoe" symbol="👟" />;
      break;
    case 'ライフスタイル':
      image = <Emoji label="house" symbol="🏠" />;
      break;
    case 'スキルアップ':
      image = <Emoji label="books" symbol="📚" />;
      break;
    case 'その他':
      image = <Emoji label="penguin" symbol="🐧" />;
      break;
    default:
      break;
  }

  return <Container themes={theme}>{image}</Container>;
};

const Container = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { theme } = themes;

    return css`
      background-color: ${theme === 'light' ? '#f1f1f1' : '#2d3240'};
      border-radius: 4px;
    `;
  }}
`;
