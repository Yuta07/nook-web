import * as React from 'react';
import styled, { css } from 'styled-components';
import { Props, SelectBoxContext } from './SelectBoxProvider';

type WrapperProps = {
  children: React.ReactNode;
};

export const SelectBoxWrapper = ({ children }: WrapperProps) => {
  const { width } = React.useContext(SelectBoxContext);

  return <Wrapper width={width}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ width: Props['width'] }>`
  ${({ width }) => {
    return css`
      width: ${width ? width : `auto`};
      height: auto;
      border: none;
      padding: 0;
      position: relative;
      display: inline-block;
      vertical-align: top;
    `;
  }}
`;
