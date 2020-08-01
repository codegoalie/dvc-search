import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const AvailabilityButton = ({ handleClick }) => {
  return <Button onClick={handleClick}>Check availability &rarr;</Button>;
};

AvailabilityButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AvailabilityButton;
