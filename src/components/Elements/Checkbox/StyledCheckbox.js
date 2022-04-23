import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: ${(props) => props.height + "px"};
  margin-right: 10px;
  width: ${(props) => props.width + "px"};
`;
