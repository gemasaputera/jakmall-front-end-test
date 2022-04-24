import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StyledButton, ChooseButton } from "./StyledButton";
import Paragraph from "../Typography/Paragraph";
import { currencyFormat } from "../../../../utils/currencyNumber";

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

    return (
      <ChooseButton onClick={handleClick} active={selected === chooseValue}>
        <Paragraph style={{ fontWeight: "400", fontSize: 13 }}>
          {chooseTitle}
        </Paragraph>
        <Paragraph style={{ fontWeight: "700", fontSize: 16 }}>
          {typeof chooseValue === "number"
            ? currencyFormat(chooseValue)
            : chooseValue}
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
