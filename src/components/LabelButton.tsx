import styled, { DefaultTheme } from 'styled-components';

interface ILabelButton {
  selected: boolean;
  theme: DefaultTheme;
}

const LabelButton = styled.label`
  background-color: ${({ selected, theme }: ILabelButton) =>
    selected ? theme.teaGreen : theme.lightGreen};
  border: 1px solid
    ${({ selected, theme }: ILabelButton) =>
      selected ? theme.teaGreen : theme.lightGreen};
  border-radius: 4px;
  color: ${({ selected, theme }: ILabelButton) => theme.darkBrown};
  cursor: pointer;
  display: block;
  padding: 5px 0;
  text-align: center;

  input {
    display: none;
  }
`;

export default LabelButton;
