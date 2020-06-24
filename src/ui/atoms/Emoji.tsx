import React from 'react';
import styled from 'styled-components';

type Props = {
  label?: string;
  symbol: string;
};

export const Emoji = ({ label, symbol }: Props) => (
  <Span className="emoji" role="img" aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
    {symbol}
  </Span>
);

const Span = styled.span`
  font-size: 40px;
  padding: 8px;
`;
