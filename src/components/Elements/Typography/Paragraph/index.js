import React from "react";
import PropTypes from "prop-types";
import { StyledParagraph } from "./StyledParagraph";

function Paragraph(props) {
  const { children } = props;
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.string,
  weight: PropTypes.string,
};

export default Paragraph;
