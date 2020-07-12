import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { ProjectData } from '../mock/project';
import { Theme } from '../themes/Theme';
import { ProjectState } from '../types/project';
import { Button } from '../ui/atoms/Button';
import { TagImage } from '../ui/atoms/TagImage';
import { EditButton } from '../ui/molecules/EditButton';
import { Modal } from '../ui/organisms/Modal/Modal';
import { ProjectForm } from '../ui/organisms/ProjectForm';
import { textTruncate } from '../utils/textTruncate';

export const Project = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [type, setType] = useState<'new' | 'edit'>('new');
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();

  const onOpenModal = (type: 'new' | 'edit', id?: number) => {
    setIsOpen(true);
    setType(type);

    if (type === 'edit') {
      const project = ProjectData.filter((project) => project.id === id);
      setSelectedProject(project[0]);
    }
  };

  const onCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const handleNewProject = ({ name, overview, tag }: Omit<ProjectState, 'id'>) => {
    console.log('new', name, overview, tag);
  };

  const handleEditProject = ({ id, name, overview, tag }: ProjectState) => {
    console.log('edit', id, name, overview, tag);
  };

  const handleDeleteProject = (id: ProjectState['id']) => {
    console.log('delete', id);
  };

  return (
    <Wrapper>
      <TitleContaienr themes={theme}>
        <Title>作成したプロジェクト</Title>
        <Button handleClick={() => onOpenModal('new')}>プロジェクトの作成</Button>
      </TitleContaienr>
      <Container>
        {ProjectData.map((project) => {
          return (
            <Content key={project.name} themes={theme}>
              <TagImage tag={project.tag} />
              <Detail>
                <DetailField>
                  <Name>{project.name}</Name>
                  <Overview>{textTruncate(project.overview)}</Overview>
                </DetailField>
                <EditField>
                  <EditButton onClick={() => onOpenModal('edit', project.id)} />
                </EditField>
              </Detail>
            </Content>
          );
        })}
      </Container>
      <Modal
        isOpen={isOpen}
        content={
          <ProjectForm
            type={type}
            project={type === 'edit' && selectedProject}
            handleNewProject={({ name, overview, tag }: Omit<ProjectState, 'id'>) =>
              handleNewProject({ name, overview, tag })
            }
            handleEditProject={({ id, name, overview, tag }: ProjectState) =>
              handleEditProject({ id, name, overview, tag })
            }
            handleDeleteProject={(id: ProjectState['id']) => handleDeleteProject(id)}
          />
        }
        onCloseModal={onCloseModal}
      />
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

const Detail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DetailField = styled.div`
  width: 90%;
  margin-right: 5%;
`;

const Name = styled.h3`
  font-size: 14px;
`;

const Overview = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;

const EditField = styled.div`
  display: flex;
  justify-content: center;
  width: 5%;
`;
