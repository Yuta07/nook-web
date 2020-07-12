import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/Theme';
import { useTheme } from '../../hooks/useTheme';

export type Props = {
  type:
    | 'hidden'
    | 'text'
    | 'number'
    | 'tel'
    | 'url'
    | 'datetime'
    | 'date'
    | 'month'
    | 'week'
    | 'time'
    | 'datetime-local'
    | 'range'
    | 'email'
    | 'password';
  name: string;
  value: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  error?: boolean;
  touch?: boolean;
  border?: boolean;
  color?: string;
  width?: string;
  height?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  name,
  value,
  placeholder = '',
  autoComplete = 'off',
  error = false,
  touch = false,
  width,
  height,
  border = true,
  color = 'MAIN',
  handleInputChange,
  handleInputBlur,
  handleSearchFocus,
}: Props) => {
  const theme = useTheme();

  let borderColor = theme.palette[theme.theme].GRAY;
  if (error && touch) {
    borderColor = theme.palette[theme.theme].DANGER;
  }

  return (
    <InputForm
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      color={color}
      borderColor={borderColor}
      border={border}
      width={width}
      height={height}
      themes={theme}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      onFocus={handleSearchFocus}
    />
  );
};

export const InputForm = styled.input<{
  color: Props['color'];
  borderColor: string;
  border: Props['border'];
  width: Props['width'];
  height: Props['height'];
  themes: Theme;
}>`
  ${({ color, borderColor, border, width, height, themes }) => {
    const { palette, theme } = themes;

    return css`
      width: ${width ? width : 'auto'};
      height: ${height ? height : 'auto'};
      font-size: 14px;
      color: ${palette[theme].PRIMARY};
      background: ${palette[theme].SECONDARY};
      padding: 6px 10px;
      border: ${border ? `1px solid ${borderColor}` : `none`};
      border-radius: 4px;
      box-shadow: none;

      &:focus {
        padding: ${border ? '6px 10px' : '5px 9px'};
        outline: none;
        border: 1px solid ${palette[theme][color]};
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
