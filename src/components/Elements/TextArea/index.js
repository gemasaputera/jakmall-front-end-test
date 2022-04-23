import React from "react";
import PropTypes from "prop-types";
import {
  WrapperTextInput,
  StyledTextArea,
  InputLabel,
  InputIcon,
  ErrorText,
  Counter,
} from "./StyledTextArea";

function TextArea({
  flex,
  label,
  name,
  register,
  errors,
  maxLength,
  minLength,
  required,
  value,
}) {
  const renderCheck = () => {
    if (errors) {
      return <InputIcon status="error">✖</InputIcon>;
    }

    if (value.length && !errors) {
      return <InputIcon status="success">✓</InputIcon>;
    }

    return false;
  };

  return (
    <WrapperTextInput flex={flex} value={value} errors={errors}>
      <StyledTextArea
        {...register(name, {
          required: required,
          maxLength: maxLength && {
            value: maxLength,
            message: `Maximum ${maxLength} characters.`,
          },
          minLength: minLength && {
            value: minLength,
            message: `Minimum ${minLength} characters.`,
          },
        })}
        errors={errors}
        maxLength={maxLength}
        required={required}
        value={value}
        rows={4}
      >
        {value}
      </StyledTextArea>
      <InputLabel>{label}</InputLabel>
      {renderCheck()}
      {errors && <ErrorText>{errors.message}</ErrorText>}
      <Counter>{value ? 120 - value.length : 120 - 0}</Counter>
    </WrapperTextInput>
  );
}

TextArea.defaultProps = {
  label: "Label",
  flex: 1,
  required: true,
};

TextArea.propTypes = {
  label: PropTypes.string,
  flex: PropTypes.number,
  required: PropTypes.bool,
};
export default TextArea;
