import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StyledButton, ChooseButton } from "./StyledButton";
import Paragraph from "../Typography/Paragraph";

function Button(props) {
  const { type, children, defaultValue, chooseTitle, chooseValue } = props;
  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);
  const [selected, setSelected] = useState(defaultValue);

  if (type === "choose-button") {
    const handleClick = () => {
      props.onClick({ title: chooseTitle, value: chooseValue });
    };

    console.log("defaultValue", defaultValue);

    return (
      <ChooseButton onClick={handleClick} active={selected === chooseValue}>
        <Paragraph style={{ fontWeight: "400", fontSize: 13 }}>
          {chooseTitle}
        </Paragraph>
        <Paragraph style={{ fontWeight: "700", fontSize: 16 }}>
          {chooseValue}
        </Paragraph>
      </ChooseButton>
    );
  }
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.defaultProps = {
  type: "",
  chooseTitle: "title",
  chooseValue: "value",
};

Button.propTypes = {
  type: PropTypes.string,
};

export default Button;
