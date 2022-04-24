import React from "react";
import PropTypes from "prop-types";
import { StyledH2 } from "./StyledH2";

function H2(props) {
  const { children } = props;
  return <StyledH2 {...props}>{children}</StyledH2>;
}

H2.defaultProps = {
  children: "",
  color: "#ff8a00",
  margin: "24px",
  weight: "700",
};

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.any,
  ]),
  margin: PropTypes.string,
  weight: PropTypes.string,
};

export default H2;
