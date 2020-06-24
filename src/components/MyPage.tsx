import React from 'react';
import styled, { css } from 'styled-components';
import { ProjectData } from '../mock/project';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../themes/Theme';
import { Button } from '../ui/atoms/Button';
import { TagImage } from '../ui/atoms/TagImage';

export const MyPage = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <TitleContaienr themes={theme}>
        <Title>作成したプロジェクト</Title>
        <Button>プロジェクトの作成</Button>
      </TitleContaienr>
      <Container>
        {ProjectData.map((project) => {
          return (
            <Content key={project.name} themes={theme}>
              <TagImage tag={project.tag} />
            </Content>
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const TitleContaienr = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;

    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0 15px;
      border-bottom: 1px solid ${palette[theme].BORDER};
    `;
  }}
`;

const Title = styled.h2`
  font-size: 16px;
`;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { palette, theme } = themes;

    return css`
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 15px 0;
      border-top: 1px solid ${palette[theme].BORDER};

      &:first-child {
        border: none;
      }
    `;
  }}
`;
