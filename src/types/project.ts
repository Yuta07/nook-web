export type Tag =
  | 'エンジニアリング'
  | 'ワークアウト'
  | 'ライフスタイル'
  | 'スキルアップ'
  | 'デザイン'
  | 'ジョブ'
  | 'その他';

export type ProjectState = {
  id: number;
  name: string;
  overview: string;
  tag: Tag;
};
