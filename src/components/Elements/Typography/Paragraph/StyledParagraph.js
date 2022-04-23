import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: 17px;
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
