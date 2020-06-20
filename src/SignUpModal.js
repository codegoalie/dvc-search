import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";

import AvailabilityLink from "./AvailabilityLink";

const SignUpModal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={handleClose}
    >
      {/*
      <h1>We're improving!</h1>
      <h1>Making progress</h1>
    */}
      <h1>Want availability right here?</h1>

      <p>
        We're actively working on getting live availability right here in the
        search results.
      </p>

      <p>
        <strong>Want to know when we launch?</strong>
      </p>

      <p>
        Join the mailing list and you'll be the first to know. We will never
        sell your email address or spam you. You'll only get messages directly
        from me to you.
      </p>

      <AvailabilityLink>
        No thanks. Send me to the DVC search for this reservation.
      </AvailabilityLink>
    </ReactModal>
  );
};

SignUpModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

SignUpModal.defaultProps = {
  isOpen: true
};

export default SignUpModal;

const customStyles = {
  content: {
    top: "25%",
    left: "25%",
    right: "25%",
    bottom: "25%",
    border: "none",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
    borderRadius: "0.25rem",
    color: "black",
    fontSize: "1.5rem"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.25)"
  }
};
