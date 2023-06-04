import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Event from "../EventCard";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Event component", () => {
  const mockProps = {
    account: "ucsc9_jrl",
    imageSrc: "test-image.jpg",
    title: "Test Event",
    description: "This is a test event.",
  };

  test("renders event card with correct content and style", () => {
    render(
      <BrowserRouter>
        <Event {...mockProps} />
      </BrowserRouter>
    );

    const eventCard = screen.getByTestId("event-card");
    expect(eventCard).toBeInTheDocument();
    expect(eventCard).toHaveStyle("background-color: #E27396");

    const eventImage = screen.getByAltText("Test Event");
    expect(eventImage).toBeInTheDocument();

    const eventTitle = screen.getByText("Test Event");
    expect(eventTitle).toBeInTheDocument();

    const eventDescription = screen.getByText("This is a test event.");
    expect(eventDescription).toBeInTheDocument();
  });

  test("navigates to /info when the event card is clicked", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);

    render(
      <BrowserRouter>
        <Event {...mockProps} />
      </BrowserRouter>
    );

    const eventCard = screen.getByTestId("event-card");
    fireEvent.click(eventCard);
    expect(mockNavigate).toHaveBeenCalledWith("/info");
  });
});
