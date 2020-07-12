import * as React from 'react';
import { Tag } from '../../../types/project';

type SelectProps = {
  value: string & Tag;
};

export interface Props {
  isOpen: boolean;
  value: string;
  options: SelectProps[];
  color: string;
  width?: string;
  onClickSelectBoxTrigger: () => void;
  handleChangeSelectValue: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string & Tag) => void;
}

export const selectBoxProp = () => {
  const ninoSelectBox: Props = {
    isOpen: false,
    value: '',
    options: [],
    color: '#fefefe',
    width: undefined,
    onClickSelectBoxTrigger: () => {},
    handleChangeSelectValue: () => {},
  };
  return ninoSelectBox;
};

export const SelectBoxContext = React.createContext<Props>(selectBoxProp());
