import styled from "styled-components";

export const StyledDivider = styled.div`
  @media screen and (max-width: 1280px) {
    width: 50%;
  }
  background-color: #eeeeee;
  height: ${(props) => `${props.height}px`};
  margin-top: -15px;
  width: ${(props) => `${props.width}px`};
`;
