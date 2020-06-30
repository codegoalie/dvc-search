import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styled from "styled-components";

import AvailabilityLink from "./AvailabilityLink";

const SignUpModal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="sign-up-modal__content"
      overlayClassName="sign-up-modal__overlay"
      onRequestClose={handleClose}
      closeTimeoutMS={250}
    >
      {/*
      <h1>We're improving!</h1>
      <h1>Making progress</h1>
    */}
      <H1>Get real-time availability!</H1>

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
        No thanks. Send me to the DVC website for this reservation.
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

const H1 = styled.h1`
  font-family: "Overpass", sans-serif;
  letter-spacing: -2px;
  margin-top: 0;
  font-size: calc(2rem + 2vmin);
`;
