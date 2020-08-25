import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styled from "styled-components";

import Button from "./Button";
import Error from "./Error";

const SignUpModal = ({ isOpen, handleClose, subscribe }) => {
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
          Thanks for subscribing! Be sure to check your email to confirm your
          subscription.
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
      <H1>Thanks for being here</H1>
      <P>
        We&apos;re actively developing the LineLeader suite of Disney Parks
        related tools and resources. Upcoming apps include a Tables in
        Wonderland calculator, DVC resale aggregator, vacation tracker, and an
        automatic FastPass+ booker.
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
    </ReactModal>
  );
};

SignUpModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  subscribe: PropTypes.func,
};

SignUpModal.defaultProps = {
  isOpen: true,
};

export default SignUpModal;

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
