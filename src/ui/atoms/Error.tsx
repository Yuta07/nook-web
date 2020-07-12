import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';

type Props = {
  messages: string[];
};

export const Error = ({ messages }: Props) => {
  const theme = useTheme();

  console.log(messages);

  return (
    <UnorderdList>
      {messages.map((message) => {
        return (
          <List key={message}>
            <Txt themes={theme}>{message}</Txt>
          </List>
        );
      })}
    </UnorderdList>
  );
};

const UnorderdList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const List = styled.li`
  padding-left: 8px;

  &:before {
    content: '• ';
    color: #c23616;
  }
`;

const Txt = styled.span<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;

    return css`
      color: ${palette[theme].DANGER};
      font-size: 14px;
      margin-bottom: 0;
    `;
  }}
`;
