import styled from "styled-components";

export const StyledH2 = styled.h2`
  color: ${(props) => props.color};
  font-size: 36px;
  font-weight: ${(props) => props.weight};
  line-height: 44px;
  margin-top: ${(props) => props.margin};
`;
