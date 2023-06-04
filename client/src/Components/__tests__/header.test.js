import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ButtonAppBar from "../header";

describe("Header component", () => {
  test("renders the app title", () => {
    render(<ButtonAppBar />);
    const appTitle = screen.getByText("SlugEvents");
    expect(appTitle).toBeInTheDocument();
  });
});
