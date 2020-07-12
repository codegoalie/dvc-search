import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Error = ({ msg }) => {
  return <ErrorMessage>{msg}</ErrorMessage>;
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;

const ErrorMessage = styled.div`
  padding: 2rem;
  border: 1px solid red;
  color: white;
  background: salmon;
  border-radius: 0.5rem;
  margin: 3rem auto;
  width: 100%;
`;
