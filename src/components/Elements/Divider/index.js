import React from "react";
import PropTypes from "prop-types";
import { StyledDivider } from "./StyledDivider";

function Divider(props) {
  return <StyledDivider height={props.height} width={props.width} />;
}

Divider.defaultProps = {
  height: 8,
  width: 300,
};

Divider.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Divider;
