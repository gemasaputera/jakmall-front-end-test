import React from "react";
import PropTypes from "prop-types";
import { StyledCheckbox } from "./StyledCheckbox";

function Checkbox(props) {
  return <StyledCheckbox {...props} />;
}

Checkbox.defaultProps = {
  height: 18,
  width: 18,
};

Checkbox.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Checkbox;
