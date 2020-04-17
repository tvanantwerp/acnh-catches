import React from 'react';
import styled from 'styled-components';

interface ICell {
  label: string;
}

const StyledCell = styled.td<ICell>`
  display: block;

  @media screen and (min-width: 480px) {
    display: table-cell;
    text-align: ${(props) => (props.label === 'price' ? 'right' : 'left')};
  }
`;

const Label = styled.span`
  text-transform: capitalize;

  @media screen and (min-width: 480px) {
    display: none;
  }
`;

const Cell: React.FC<ICell> = ({ label, children }) => {
  return (
    <StyledCell label={label}>
      <Label>{`${label}: `}</Label>
      {children}
    </StyledCell>
  );
};

export default Cell;
