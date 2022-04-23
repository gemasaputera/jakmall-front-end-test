import styled from "styled-components";

export const StyledH3 = styled.h3`
  color: ${(props) => props.color};
  font-size: 24px;
  font-weight: ${(props) => props.weight};
  line-height: 30px;
  margin: ${(props) => props.margin};
`;
