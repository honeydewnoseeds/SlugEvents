import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Popup from "../popups";

describe("Popup component", () => {
  test("renders the popup when trigger is true", () => {
    render(<Popup trigger={true}>Popup content</Popup>);
    const popup = screen.getByTestId("popup");
    expect(popup).toBeInTheDocument();
  });

  test("does not render the popup when trigger is false", () => {
    render(<Popup trigger={false}>Popup content</Popup>);
    const popup = screen.queryByTestId("popup");
    expect(popup).not.toBeInTheDocument();
  });

  test("renders the popup content", () => {
    render(<Popup trigger={true}>Popup content</Popup>);
    const popupContent = screen.getByText("Popup content");
    expect(popupContent).toBeInTheDocument();
  });
});
