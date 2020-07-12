import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { SelectBoxContext } from './SelectBoxProvider';
import { Tag } from '../../../types/project';

type SelectProps<T> = {
  value: T;
};

export type Props<T = string & Tag> = {
  children: ReactNode;
  value: T;
  options: SelectProps<T>[];
  color: string;
  width?: string;
  display?: string;
  selector?: string;
  handleSelectChange: (value: T) => void;
};

export function SelectBox({ children, value, options, color, width, selector, handleSelectChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref: any = useRef();

  useEffect(() => {
    const handleClickBody = () => {
      setIsOpen(false);
    };

    ref.current = selector ? document.querySelector(selector) : document.querySelector('body');
    document.body.addEventListener('click', handleClickBody, false);

    return () => {
      document.body.removeEventListener('click', handleClickBody, false);
    };
  }, [selector]);

  return (
    <SelectBoxContext.Provider
      value={{
        isOpen: isOpen,
        value: value,
        options: options,
        color: color,
        width: width,
        onClickSelectBoxTrigger: () => {
          setIsOpen(!isOpen);
        },
        handleChangeSelectValue: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string & Tag) => {
          event.preventDefault();
          setIsOpen(false);
          handleSelectChange(value);
        },
      }}
    >
      {children}
    </SelectBoxContext.Provider>
  );
}
