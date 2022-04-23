import styled from "styled-components";

export const WrapperTextInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  ${(props) => {
    if (props.flex) {
      return `flex: ${props.flex};`;
    }

    return null;
  }}
  ${(props) => {
    if (props.disabled) {
      return `background: rgba(239, 239, 239, 0.3); `;
    }

    return null;
  }}
  align-items: flex-end;
  padding: 12px 15px;
  min-height: 60px;
  ${(props) => {
    if (props.errors) {
      return `
        border: 1px solid #ff8a00;
      `;
    }

    if (!props.errors && props.value?.length) {
      return `
        border: 1px solid #1bd97b;
      `;
    }
    return `
    border: 1px solid #ccc;
  `;
  }}

  &:hover {
    border: 1px solid #555;
  }
`;

export const InputLabel = styled.label`
  font-family: Inter, sans-serif;
  font-weight: 500;
  color: #000;
  opacity: 0.4;
  position: absolute;
  left: 15px;
  top: 22px;
  transition: 0.2s cubic-bezier(0, 0, 0.3, 1);
  pointer-events: none;
  color: #000;
  user-select: none;
`;

export const InputIcon = styled.span`
  ${(props) => {
    switch (props.status) {
      case "error":
        return `color: #ff8a00;`;

      case "success":
        return `color: #1bd97b;`;

      default:
        return `color: inherit`;
    }
  }}
  position: absolute;
  right: 15px;
`;

export const Input = styled.input`
  border: none;
  margin: 0;
  padding: 2px 0;
  outline: none;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  color: #2d2a40;
  -webkit-tap-highlight-color: transparent;

  &::placeholder {
    font-family: Inter, sans-serif;
    font-weight: 500;
    color: #000;
    opacity: 0.4;
  }

  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    ${(props) => {
      if (props.errors) {
        return `color: #ff8a00;`;
      }
      if (props.value?.length && !props.errors) {
        return `color: #1bd97b;`;
      }

      return false;
    }}
    font-size: 13px;
    top: 10px;
    opacity: 1;
  }
`;

export const ErrorText = styled.p`
  color: #ff8a00;
  position: absolute;
  font-size: 12px;
  font-weight: 500;
  bottom: 2px;
  top: 2px;
  right: 15px;
`;
