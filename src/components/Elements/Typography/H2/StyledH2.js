import styled from "styled-components";

export const StyledH2 = styled.h2`
  @media screen and (max-width: 1280px) {
    font-size: 24px;
    line-height: 34px;
  }
  color: ${(props) => props.color};
  font-size: 36px;
  font-weight: ${(props) => props.weight};
  line-height: 44px;
  margin-top: ${(props) => props.margin};
`;
