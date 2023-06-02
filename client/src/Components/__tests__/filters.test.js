import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../filters";

describe("Filters component", () => {
  test("renders all filter buttons", () => {
    render(<Filters />);

    const allButton = screen.getByRole("button", { name: "All" });
    const c9c10Button = screen.getByRole("button", { name: "College 9/10" });
    const cowellStevensonButton = screen.getByRole("button", {
      name: "Cowell/Stevenson",
    });
    const porterKresgeButton = screen.getByRole("button", {
      name: "Porter/Kresge",
    });
    const rccOakesButton = screen.getByRole("button", { name: "Oakes/RCC" });
    const crownMerillButton = screen.getByRole("button", {
      name: "Crown/Merrill",
    });

    expect(allButton).toBeInTheDocument();
    expect(c9c10Button).toBeInTheDocument();
    expect(cowellStevensonButton).toBeInTheDocument();
    expect(porterKresgeButton).toBeInTheDocument();
    expect(rccOakesButton).toBeInTheDocument();
    expect(crownMerillButton).toBeInTheDocument();
  });

  test("calls the correct filter function when a button is clicked", () => {
    const resetFilter = jest.fn();
    const filterC9C10 = jest.fn();
    const filterCowellStevenson = jest.fn();
    const filterPorterKresge = jest.fn();
    const filterRccOakes = jest.fn();
    const filterCrownMerill = jest.fn();

    render(
      <Filters
        resetFilter={resetFilter}
        filterC9C10={filterC9C10}
        filterCowellStevenson={filterCowellStevenson}
        filterPorterKresge={filterPorterKresge}
        filterRccOakes={filterRccOakes}
        filterCrownMerill={filterCrownMerill}
      />
    );

    const c9c10Button = screen.getByRole("button", { name: "College 9/10" });
    const cowellStevensonButton = screen.getByRole("button", {
      name: "Cowell/Stevenson",
    });
    const porterKresgeButton = screen.getByRole("button", {
      name: "Porter/Kresge",
    });
    const rccOakesButton = screen.getByRole("button", { name: "Oakes/RCC" });
    const crownMerillButton = screen.getByRole("button", {
      name: "Crown/Merrill",
    });

    fireEvent.click(c9c10Button);
    fireEvent.click(cowellStevensonButton);
    fireEvent.click(porterKresgeButton);
    fireEvent.click(rccOakesButton);
    fireEvent.click(crownMerillButton);

    expect(filterC9C10).toHaveBeenCalled();
    expect(filterCowellStevenson).toHaveBeenCalled();
    expect(filterPorterKresge).toHaveBeenCalled();
    expect(filterRccOakes).toHaveBeenCalled();
    expect(filterCrownMerill).toHaveBeenCalled();
  });

  test("calls the reset filter function when the 'All' button is clicked", () => {
    const resetFilter = jest.fn();

    render(<Filters resetFilter={resetFilter} />);

    const allButton = screen.getByRole("button", { name: "All" });

    fireEvent.click(allButton);

    expect(resetFilter).toHaveBeenCalled();
  });
});
