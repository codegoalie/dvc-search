import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styled from "styled-components";

import AvailabilityLink from "./AvailabilityLink";
import Button from "./Button";

const SignUpModal = ({ isOpen, handleClose }) => {
  var emailInput;
  const [email, setEmail] = useState("");

  const focusInput = () => {
    emailInput.focus();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      className="sign-up-modal__content"
      overlayClassName="sign-up-modal__overlay"
      onRequestClose={handleClose}
      closeTimeoutMS={250}
      onAfterOpen={focusInput}
    >
      <H1>Get real-time availability!</H1>
      <p>
        We&apos;re actively working on getting live availability right here in
        the search results.
      </p>
      <p>
        <strong>Want to know when we launch?</strong>
      </p>
      <p>
        Join the mailing list and you&apos;ll be the first to know. We will
        never sell your email address or spam you. You&apos;ll only get messages
        directly from me to you.
      </p>

      <p className="form">
        <Label htmlFor="email">Email address</Label>
        <Input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          id="email"
          ref={_input => {
            emailInput = _input;
          }}
        />
        <Button>Sign up!</Button>
      </p>

      <AvailabilityLink>
        No thanks. Send me to the DVC website for this reservation.
      </AvailabilityLink>
      <LinkSubText>(must be signed in already)</LinkSubText>
    </ReactModal>
  );
};

SignUpModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

SignUpModal.defaultProps = {
  isOpen: true,
};

export default SignUpModal;

const H1 = styled.h1`
  font-family: "Overpass", sans-serif;
  letter-spacing: -2px;
  margin-top: 0;
  font-size: calc(2rem + 2vmin);
`;

const Label = styled.label`
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  border-radius: 0.25rem;
  height: 2rem;
  margin-right: 0.5rem;
  border: 1px solid black;
  padding: 0 0.5rem;
`;

const LinkSubText = styled.span`
  font-size: 0.75rem;
  margin-left: 0.25rem;
`;
