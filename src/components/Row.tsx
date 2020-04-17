import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.teaGreen};
  display: grid;
  grid-gap: 0.25rem;
  grid-template: repeat(3, auto) / repeat(auto-fit, minmax(100px, 1fr));
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  @media screen and (min-width: 480px) {
    border: none;
    display: table-row;
    margin: none;
    padding: none;
  }
`;

const Row: React.FC = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
