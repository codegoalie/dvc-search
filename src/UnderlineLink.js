import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UnderlineLink = props => {
  return (
    <Link href={props.href}>
      <span>{props.children}</span>
      <svg viewBox="0 0 13 20">
        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
      </svg>
    </Link>
  );
};

UnderlineLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default UnderlineLink;

const Link = styled.a`
  --line: #8690bf;
  --color: #bec2d0;

  text-decoration: none;
  color: var(--color);
  position: relative;

  span {
    background-image: linear-gradient(0deg, var(--line) 0%, var(--line) 100%);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: var(--background-size, 100%) 1px;
    transition: background-size 0.2s linear var(--background-delay, 0.15s);
    font-size: 1rem;
    line-height: 20px;
    transform: translateZ(0);
  }

  svg {
    vertical-align: top;
    display: inline;
    line-height: 1;
    width: 13px;
    height: 20px;
    position: relative;
    left: -2px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1px;
    stroke: var(--line);
    stroke-dasharray: 7.95 30;
    stroke-dashoffset: var(--stroke-dashoffset, 46);
    transition: stroke-dashoffset var(--stroke-duration, 0.15s)
      var(--stroke-easing, linear) var(--stroke-delay, 0s);
  }

  &:hover {
    --background-size: 0%;
    --background-delay: 0s;
    --stroke-dashoffset: 26;
    --stroke-duration: 0.3s;
    --stroke-easing: cubic-bezier(0.3, 1.5, 0.5, 1);
    --stroke-delay: 0.195s;
  }
`;
