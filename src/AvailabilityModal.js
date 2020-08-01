import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styled from "styled-components";

import AvailabilityLink from "./AvailabilityLink";
import Button from "./Button";
import Error from "./Error";

const AvailabilityModal = ({
  isOpen,
  handleClose,
  subscribe,
  activeResult,
}) => {
  var emailInput;
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const focusInput = () => {
    emailInput.focus();
  };

  const showSuccess = json => {
    switch (json.status) {
      case "Created":
        setResult("success");
        break;
      default:
        setResult("error");
        break;
    }
  };

  const showError = () => {
    setResult("error");
  };

  const handleSubmit = e => {
    e.preventDefault();
    subscribe(email, showSuccess, showError);
  };

  let formArea;
  switch (result) {
    case "success":
      formArea = (
        <Success>
          Thanks for subscribing! Click the link below to search availavility at
          DVC.
        </Success>
      );
      break;
    default:
      formArea = (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="email@address.com"
            ref={_input => {
              emailInput = _input;
            }}
          />
          <Button>Sign up!</Button>
        </Form>
      );
      break;
  }

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
      <P>
        We&apos;re actively working on getting live availability right here in
        the search results.
      </P>
      <P>
        <strong>Want to know when we launch?</strong>
      </P>
      <P>
        Join the mailing list and you&apos;ll be the first to know. We will
        never sell your email address or spam you. You&apos;ll only get messages
        directly from me to you.
      </P>

      {result === "error" && (
        <Error msg="Something went wrong signing up. Super sorry about that. :/ Please refresh and try again or email chris@lineleader.io" />
      )}
      {formArea}

      <AvailabilityLink {...activeResult}>
        No thanks. Send me to the DVC site for this reservation.
      </AvailabilityLink>
      <LinkSubText>(must be signed in already)</LinkSubText>
    </ReactModal>
  );
};

AvailabilityModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  subscribe: PropTypes.func,
  activeResult: PropTypes.shape({
    checkInDate: PropTypes.string.isRequired,
    checkOutDate: PropTypes.string.isRequired,
    resort: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
  }),
};

AvailabilityModal.defaultProps = {
  isOpen: true,
};

export default AvailabilityModal;

const H1 = styled.h1`
  margin: 0 0 1rem 0;
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

const Form = styled.form`
  margin-bottom: 1.5rem;

  input {
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    input {
      width: 100%;
      height: 3rem;
    }
  }
`;

const P = styled.p`
  line-height: 1.8rem;

  @media (max-width: 768px) {
    line-height: 1.3rem;
  }
`;

const Success = styled.p`
  font-weight: bold;
  background: palegreen;
  padding: 0.5rem;
  margin-left: -0.5rem;
  border-radius: 0.5rem;
`;
