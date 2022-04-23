import React from "react";
import PropTypes from "prop-types";
import { StyledH3 } from "./StyledH3";

function H3(props) {
  const { weight, margin, color, children } = props;
  return (
    <StyledH3 weight={weight} color={color} margin={margin}>
      {children}
    </StyledH3>
  );
}

H3.defaultProps = {
  color: "#ff8a00",
  margin: "10px 0",
  weight: "700",
};

H3.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  weight: PropTypes.string,
};

export default H3;
