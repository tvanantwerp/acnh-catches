import React from 'react';
import styled from 'styled-components';

interface ITextInput {
  label: string;
  id: string;
  type: string;
  value: any;
  update: (event: any) => void;
}

const Container = styled.div`
  border: 0;
  border-bottom: 2px solid transparent;
  display: grid;
  grid-template: repeat(2, auto) / 1fr;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.lightGreen};
  }

  &:active,
  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.teaGreen};
  }

  @media screen and (min-width: 480px) {
    grid-gap: 16px;
    grid-template: auto / repeat(2, 1fr);
  }
`;

const StyledLabel = styled.label`
  text-align: center;

  @media screen and (min-width: 480px) {
    text-align: end;
  }
`;

const StyledInput = styled.input`
  border: 0;
  font-size: ${(props) => props.theme.fontSize};
  padding: 0;
  text-align: center;

  @media screen and (min-width: 480px) {
    text-align: start;
  }
`;

const TextInput: React.FC<ITextInput> = ({
  label,
  id,
  type,
  value,
  update,
}) => {
  return (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => update(e.target.value)}
      />
    </Container>
  );
};

export default TextInput;
