import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateEvent from "../CreateEvent";

describe("CreateEvent component", () => {
  test("renders create event form with correct elements", () => {
    render(<CreateEvent onClose={() => {}} />);

    const eventTitleInput = screen.getByLabelText(/Event Title/i);
    expect(eventTitleInput).toBeInTheDocument();

    const eventDescriptionInput = screen.getByLabelText(/Event Description/i);
    expect(eventDescriptionInput).toBeInTheDocument();

    const uploadButton = screen.getByText(/Upload File/i);
    expect(uploadButton).toBeInTheDocument();
  });

  test("calls onClose when the Close button is clicked", () => {
    const mockOnClose = jest.fn();
    render(<CreateEvent onClose={mockOnClose} />);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
