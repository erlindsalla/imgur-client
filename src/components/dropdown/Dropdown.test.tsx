import { render, fireEvent } from "@testing-library/react";
import React from "react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  it("renders the dropdown menu correctly", () => {
    // Render the Dropdown component
    const options = ["Option 1", "Option 2", "Option 3"];
    const handleFilterSelection = jest.fn();
    const selectedOption = "Option 1";
    const { getByText, getByTestId } = render(
      <Dropdown
        options={options}
        handleFilterSelection={handleFilterSelection}
        selectedOption={selectedOption}
      />
    );

    // Find the dropdown menu and verify its initial state
    const dropdownMenu = getByTestId("dropdown-menu");
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenu).not.toHaveClass("open");

    // Simulate a click event on the dropdown toggle button
    const dropdownToggle = getByText("Toggle Dropdown");
    fireEvent.click(dropdownToggle);

    // Verify that the dropdown menu is now open
    expect(dropdownMenu).toHaveClass("open");
  });
});
