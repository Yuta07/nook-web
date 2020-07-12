import { ProjectState } from '../types/project';

export const ProjectData: ProjectState[] = [
  {
    id: 1,
    name: 'test',
    overview: 'ホーム画面に表示するための一番最初のデータです。',
    tag: 'エンジニアリング',
  },
  {
    id: 2,
    name: 'girl project',
    overview: '写真を撮っている綺麗な女性です。',
    tag: 'ワークアウト',
  },
  {
    id: 3,
    name: 'null project',
    overview: '何もデータがないプロジェクト',
    tag: 'デザイン',
  },
  {
    id: 4,
    name: 'テスト',
    overview: 'testをテストにしただけのプロジェクト',
    tag: 'スキルアップ',
  },
  {
    id: 5,
    name: '文字数制限テスト',
    overview:
      '文字数制限するためのテストデータです。文字数制限するためのテストデータです。文字数制限するためのテストデータです。文字数制限するためのテストデータです。文字数制限するためのテストデータです。',
    tag: 'ライフスタイル',
  },
  {
    id: 5,
    name: '文字数制限テスト2',
    overview:
      '文字数制限するためのテストデータです。文字数制限するためのテストデータです。文字数制限するためのテストデータです。文字数制限するためのテストデータです。文字数制限するためのテストデータです。',
    tag: 'ジョブ',
  },
  {
    id: 6,
    name: '概要のないプロジェクト',
    overview: '',
    tag: 'その他',
  },
];
