import * as React from 'react';
import styled from 'styled-components';
import { SelectBoxContext } from './SelectBoxProvider';

export const SelectBoxOption = () => {
  const { value, options } = React.useContext(SelectBoxContext);

  const renderOptions = options.map(option => {
    return (
      <React.Fragment key={option.value}>
        <Option value={option.value}>{option.value}</Option>
      </React.Fragment>
    );
  });

  return (
    <Select value={value} disabled={true}>
      {renderOptions}
    </Select>
  );
};

const Select = styled.select`
  display: none;
`;

const Option = styled.option``;
