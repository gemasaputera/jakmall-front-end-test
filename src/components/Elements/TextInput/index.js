import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  WrapperTextInput,
  Input,
  InputLabel,
  InputIcon,
  ErrorText,
} from "./StyledTextInput";

function TextInput({
  flex,
  label,
  name,
  register,
  errors,
  isPhone,
  isMail,
  maxLength,
  minLength,
  required,
  value,
  disabled,
}) {
  const [validation, setValidation] = useState(null);

  const renderCheck = () => {
    if (errors) {
      return <InputIcon status="error">✖</InputIcon>;
    }

    if (value.length && !errors) {
      return <InputIcon status="success">✓</InputIcon>;
    }

    return false;
  };

  if (isPhone) {
    if (!validation) {
      setValidation({
        value: /\+|\-|\(|\)?[0-9]/g,
        message: "Input can only contain numbers or -,+,(,)",
      });
    }
  }

  if (isMail) {
    if (!validation) {
      setValidation({
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Input format is incorrect",
      });
    }
  }

  return (
    <WrapperTextInput
      flex={flex}
      value={value}
      disabled={disabled}
      errors={errors}
    >
      <Input
        {...register(name, {
          required: disabled ? false : required,
          pattern: validation,
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
        disabled={disabled}
      />
      <InputLabel>{label}</InputLabel>
      {renderCheck()}
      {errors && <ErrorText>{errors.message}</ErrorText>}
    </WrapperTextInput>
  );
}

TextInput.defaultProps = {
  label: "Label",
  flex: 1,
  required: true,
};

TextInput.propTypes = {
  label: PropTypes.string,
  flex: PropTypes.number,
  required: PropTypes.bool,
};
export default TextInput;
