/* globals test expect */
import React from "react";
import { render } from "@testing-library/react";
import Result from "./Result";

const props = {
  resort: "Name",
  roomType: "One-Bedroom Villa",
  viewType: "Theme Park View",
  startDate: "2020-05-01",
  endDate: "2020-05-09",
  points: 120,
  handleAvailabilityClick: () => {},
  goalEndDate: new Date("2020-05-07"),
};

test("renders resort name", () => {
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText(props.resort);
  expect(headerElement).toBeInTheDocument();
});

test("renders room type", () => {
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText(new RegExp(props.roomType));
  expect(headerElement).toBeInTheDocument();
});

test("renders view type", () => {
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText(new RegExp(props.viewType));
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

test("renders VGF abbreviation for Grand Floridian", () => {
  let localProps = props;
  localProps.resort = "The Villas at Disney's Grand Floridian Resort & Spa";
  const { getByText } = render(<Result {...props} />);
  const headerElement = getByText("VGF");
  expect(headerElement).toBeInTheDocument();
});

test("renders VGF colored icon for Grand Floridian", () => {
  let localProps = props;
  localProps.resort = "The Villas at Disney's Grand Floridian Resort & Spa";
  const { container } = render(<Result {...props} />);
  expect(container.firstChild).toMatchSnapshot();
});

test("renders number of days extension", () => {
  const { getByText } = render(<Result {...props} />);
  const extensionElement = getByText(/\+2 days/);
  expect(extensionElement).toBeInTheDocument();
});
