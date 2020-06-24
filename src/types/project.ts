export type Tag = 'エンジニアリング' | 'ワークアウト' | 'ライフスタイル' | 'スキルアップ' | 'その他';

export type Project = {
  id: number;
  name: string;
  overview: string;
  tag: Tag;
};
