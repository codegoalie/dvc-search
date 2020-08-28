import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as Timer } from "./timer.svg";

const ExtendToggle = ({ active, handleToggle }) => {
  const handler = () => {
    handleToggle();
  };
  return (
    <StyledTimer
      active={active}
      onClick={handler}
      title="Extend dates to use maximum points"
    >
      <Timer />
    </StyledTimer>
  );
};

ExtendToggle.propTypes = {
  active: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ExtendToggle;

const StyledTimer = styled.div.attrs(props => ({
  color: props.active ? "hsla(120,100%,78%,1.8)" : "white",
}))`
  height: 2rem;
  width: 2rem;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.25rem;

  &:hover {
    background-color: hsla(120, 100%, 78%, 0.25);
  }

  path {
    fill: ${p => p.color};
    stroke: ${p => p.color} !important;
  }
`;
