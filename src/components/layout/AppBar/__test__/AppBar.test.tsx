import React from "react";

import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import AppBar from "../AppBar";

describe("AppBar tests", () => {
  it("Should match the snapshot", () => {
    const appBar = renderer.create(<AppBar title={"Home"} />);
    expect(appBar).toMatchSnapshot();
  });

  it("Should renders correctly", () => {
    render(<AppBar title={"Home"} />);

    const sampleText = screen.getByText(/Home/i);
    expect(sampleText).toBeInTheDocument();
  });
});
