import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.containerBackgroundColor};
  border: 1px solid ${(props) => props.theme.containerBackgroundColor};
  border-radius: 8px;
  border-spacing: 1rem 0.5rem;
  max-width: 900px;
  margin: 10px auto;
  padding: 1rem;
  width: 100%;
`;

export default Container;
