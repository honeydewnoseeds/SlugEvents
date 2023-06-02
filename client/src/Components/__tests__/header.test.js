import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonAppBar from "../header";

describe("Header component", () => {
  test("renders the app title", () => {
    render(<ButtonAppBar />);
    const appTitle = screen.getByText("SlugEvents");
    expect(appTitle).toBeInTheDocument();
  });

  test("renders the login button", () => {
    render(<ButtonAppBar />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
});
