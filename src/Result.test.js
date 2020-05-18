import React from "react";
import { render } from "@testing-library/react";
import Result from "./Result";

const props = {
  resort: "Name",
  roomType: "1-bedroom villa",
  startDate: "May 1",
  endDate: "May 9",
  points: 120
};

test("renders resort name", () => {
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText(props.resort);
  expect(headerElement).toBeInTheDocument();
});

test("renders room type name", () => {
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText(props.roomType);
  expect(headerElement).toBeInTheDocument();
});

test("renders date range", () => {
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText(`${props.startDate} — ${props.endDate}`);
  expect(headerElement).toBeInTheDocument();
});

test("renders points", () => {
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText(`${props.points} points`);
  expect(headerElement).toBeInTheDocument();
});

test("renders N/A abbreviation for unknown resort names", () => {
  let localProps = props;
  localProps.resort = "Unknown resort name";
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText("N/A");
  expect(headerElement).toBeInTheDocument();
});

test("renders N/A abbreviation for Grand Floridian", () => {
  let localProps = props;
  localProps.resort = "The Villas at Disney's Grand Floridian Resort & Spa";
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText("VGF");
  expect(headerElement).toBeInTheDocument();
});
