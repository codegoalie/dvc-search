import styled from "styled-components";

const InputWrapper = styled.span`
  display: flex;
  flex-direction: column;
  font-family: "Overpass", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default InputWrapper;
