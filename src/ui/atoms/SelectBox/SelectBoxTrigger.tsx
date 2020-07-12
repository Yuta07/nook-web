import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { useTheme } from '../../../hooks/useTheme';
import { SelectBoxContext } from './SelectBoxProvider';

export const SelectBoxTrigger = () => {
  const { value, color, onClickSelectBoxTrigger } = React.useContext(SelectBoxContext);
  const theme = useTheme();

  return (
    <SelectBoxTriggerRef color={color} themes={theme} onClick={onClickSelectBoxTrigger}>
      {value}
      <TriangleArrow color={color} themes={theme} />
    </SelectBoxTriggerRef>
  );
};

const SelectBoxTriggerRef = styled.a<{ color: string; themes: Theme }>`
  ${({ color, themes }) => {
    const { palette, theme } = themes;

    return css`
      background-color: ${palette[theme][color]};
      width: 100%;
      display: inline-block;
      position: relative;
      border: none;
      font-size: 14px;
      font-weight: normal;
      line-height: 1.4;
      border-radius: 4px;
      padding: 10px 40px 10px 15px;
      min-height: 40px;
      transition: border 0.25s linear, color 0.25s linear, background-color 0.25s linear;
      cursor: pointer;

      ${color === 'SECONDARY'
        ? `color: ${palette[theme].PRIMARY}; border: 1px solid ${palette[theme].GRAY}`
        : `color:${palette[theme].SECONDARY}; border:none`};
    `;
  }}
`;

const TriangleArrow = styled.span<{ color: string; themes: Theme }>`
  ${({ color, themes }) => {
    const { palette, theme } = themes;

    return css`
      display: inline-block;
      border-width: 8px 6px;
      border-color: ${color === 'SECONDARY' ? palette[theme].GRAY : palette[theme].SECONDARY} transparent;
      border-style: solid;
      border-bottom-style: none;
      position: absolute;
      right: 16px;
      top: 42%;
      transform: scale(1.001);
    `;
  }}
`;
