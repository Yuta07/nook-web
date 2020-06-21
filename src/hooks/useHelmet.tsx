import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <Helmet titleTemplate="nook | %s" defaultTitle="nook" title={title}>
      <html lang="jp" />
    </Helmet>
  );
};
