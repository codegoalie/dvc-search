import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = ({ htmlFor, children }) => (
  <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;

const StyledLabel = styled.label`
  text-align: left;
  display: inline-block;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
  }
`;
