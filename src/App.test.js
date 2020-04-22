import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders headline", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/how will you use your points/i);
  expect(headerElement).toBeInTheDocument();
});
