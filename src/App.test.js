import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders headline", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/find your best/i);
  expect(headerElement).toBeInTheDocument();
});
