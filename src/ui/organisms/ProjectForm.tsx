import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { Button } from '../atoms/Button';
// import { Error } from '../atoms/Error';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { SelectBox } from '../atoms/SelectBox/SelectBox';
import { SelectBoxWrapper } from '../atoms/SelectBox/SelectBoxWrapper';
import { SelectBoxTrigger } from '../atoms/SelectBox/SelectBoxTrigger';
import { SelectBoxContent } from '../atoms/SelectBox/SelectBoxContent';
import { SelectBoxOption } from '../atoms/SelectBox/SelectBoxOption';
// import { Spinner } from '../atoms/Spinner';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../themes/Theme';
import { ProjectState, Tag } from '../../types/project';

type Pro = Omit<ProjectState, 'id'>;

type Props = {
  type: 'new' | 'edit';
  project?: ProjectState;
  handleNewProject?: (project: Pro) => void;
  handleEditProject?: (project: ProjectState) => void;
  handleDeleteProject?: (id: number) => void;
};

const options: any = [
  { value: 'エンジニアリング' },
  { value: 'ワークアウト' },
  { value: 'ライフスタイル' },
  { value: 'スキルアップ' },
  { value: 'デザイン' },
  { value: 'ジョブ' },
  { value: 'その他' },
];

export const ProjectForm = ({ type, project, handleNewProject, handleEditProject, handleDeleteProject }: Props) => {
  const [name, setName] = useState<string>(type === 'new' ? '' : project.name);
  const [overview, setOverview] = useState<string>(type === 'new' ? '' : project.overview);
  const [tag, setTag] = useState<Tag>(type === 'new' ? 'エンジニアリング' : project.tag);

  const theme = useTheme();

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      default:
    }
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'overview':
        setOverview(value);
        break;
      default:
    }
  };

  const handleSelectChange = (value: Tag): void => {
    setTag(value);
  };

  return (
    <Container>
      {/* {loading && <Spinner position={{ position: 'absolute', top: '45%', left: '162px' }} />} */}
      <Title>{type === 'new' ? 'プロジェクトの作成' : 'プロジェクトの編集'}</Title>
      <Form>
        <Row>
          <Label label="プロジェクト名" />
          <Input
            type="text"
            name="name"
            value={name}
            border={true}
            width="100%"
            handleInputChange={handleInputChange}
          />
        </Row>
        <Row className="project-select-tag">
          <Label label="タグ" />
          <SelectBox
            value={tag}
            options={options}
            color="SECONDARY"
            width="100%"
            selector="project-select-tag"
            handleSelectChange={handleSelectChange}
          >
            <SelectBoxWrapper>
              <SelectBoxTrigger />
              <SelectBoxContent />
            </SelectBoxWrapper>
            <SelectBoxOption />
          </SelectBox>
        </Row>
        <Row>
          <Label label="プロジェクトの概要" />
          <TextArea name="overview" value={overview} width="100%" themes={theme} onChange={handleTextareaChange} />
        </Row>
        <ButtonRow>
          <Button
            type="button"
            disabled={false}
            background={'SUCCESS'}
            width="120px"
            handleClick={
              type === 'new'
                ? () => handleNewProject({ name, overview, tag })
                : () => handleEditProject({ id: project.id, name, overview, tag })
            }
          >
            {type === 'new' ? '作成する' : '更新する'}
          </Button>
          {type === 'edit' && (
            <Button
              type="button"
              disabled={false}
              background={'DANGER'}
              width="120px"
              handleClick={() => handleDeleteProject(project.id)}
            >
              削除する
            </Button>
          )}
        </ButtonRow>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
`;

// const ErrorText = styled.div`
//   margin-top: 15px;
// `;

const Form = styled.div``;

const Row = styled.div`
  margin-top: 20px;
`;

const ButtonRow = styled.div`
  margin: 25px 0 10px;
  display: flex;
  justify-content: flex-end;

  > button {
    &:nth-child(2) {
      margin-left: 20px;
    }
  }
`;

const TextArea = styled.textarea<{ width: string; themes: Theme }>`
  ${({ width, themes }) => {
    const { palette, theme } = themes;

    return css`
      width: ${width ? width : 'auto'};
      height: 100px;
      font-size: 14px;
      color: ${palette[theme].PRIMARY};
      background: ${palette[theme].SECONDARY};
      padding: 6px 10px;
      border: 1px solid ${palette[theme].GRAY};
      border-radius: 4px;
      box-shadow: none;

      &:focus {
        padding: 6px 10px;
        outline: none;
        border: 1px solid ${palette[theme].SECONDARY};
      }

      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${palette[theme].PLACE_HOLDER};
      }

      :-ms-input-placeholder {
        color: ${palette[theme].PLACE_HOLDER};
      }
    `;
  }}
`;
