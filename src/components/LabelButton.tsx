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
  background-color: ${(props) => props.theme.buttonBlue};
  border: 3px solid
    ${({ selected, theme }: IStyledLabelButton) =>
      selected ? theme.buttonBlueHover : theme.buttonBlue};
  border-radius: 30px;
  color: ${({ theme }: IStyledLabelButton) => theme.darkBrown};
  cursor: pointer;
  display: block;
  padding: 5px 0;
  position: relative;
  text-align: center;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out,
    border 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.buttonBlueHover};
    border: 3px solid ${(props) => props.theme.buttonBlueHover};
    color: white;
  }

  input {
    display: none;
  }
`;

const Checkmark = styled(motion.div)`
  background-color: ${(props) => props.theme.buttonBlueHover};
  border: 1px solid transparent;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  height: 15px;
  position: absolute;
  right: 0;
  top: -10px;
  width: 15px;
`;

const LabelButton: React.FC<ILabelButton> = ({ selected, children }) => (
  <StyledLabelButton
    selected={selected}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
  >
    {children}
    {selected && (
      <Checkmark
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        ✔
      </Checkmark>
    )}
  </StyledLabelButton>
);

export default LabelButton;
