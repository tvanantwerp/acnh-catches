import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';

interface IStyledLabelButton {
  selected: boolean;
  theme: DefaultTheme;
}

interface ILabelButton {
  selected: boolean;
  htmlFor?: string;
}

const StyledLabelButton = styled(motion.label)`
  background-color: ${({ selected, theme }: IStyledLabelButton) =>
    selected ? theme.teaGreen : theme.lightGreen};
  border: 1px solid
    ${({ selected, theme }: IStyledLabelButton) =>
      selected ? theme.teaGreen : theme.lightGreen};
  border-radius: 4px;
  color: ${({ theme }: IStyledLabelButton) => theme.darkBrown};
  cursor: pointer;
  display: block;
  padding: 5px 0;
  text-align: center;

  input {
    display: none;
  }
`;

const LabelButton: React.FC<ILabelButton> = ({ selected, children }) => (
  <StyledLabelButton
    selected={selected}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
  >
    {children}
  </StyledLabelButton>
);

export default LabelButton;
