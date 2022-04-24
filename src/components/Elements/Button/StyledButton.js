import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #ff8a00;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 40px;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ed7e00;
  }
  &:disabled,
  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ChooseButton = styled.button`
  text-align: left;
  color: #000;
  padding: 12px 15px;
  outline: none;
  cursor: pointer;
  min-width: 180px;
  &:hover {
    opacity: 1;
    border-color: #000;
  }
  ${(props) => {
    if (props.active) {
      return `
      background-color: rgba(27, 217, 123, 0.1);
      border: 2px solid #1BD97B;
      opacity: 1;
      `;
    } else {
      return `
      background-color: #fff;
      border: 1px solid #cccccc;
      opacity: 0.6;
      `;
    }
  }}
`;
