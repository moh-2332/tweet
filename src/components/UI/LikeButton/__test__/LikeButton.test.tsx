import React from "react";

import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import LikeButton from "../LikeButton";

const handler = jest.fn();

describe("LikeButton tests", () => {
  it("Should match the snapshot", () => {
    const likeButton = renderer.create(
      <LikeButton isFavorite={false} onToggle={handler} />
    );
    expect(likeButton).toMatchSnapshot();
  });

  it("Should renders the empty favorite icon", () => {
    render(<LikeButton isFavorite={false} onToggle={handler} />);

    const isNotLikedIcon = screen.getByText(/favorite_border/i);
    expect(isNotLikedIcon).toBeInTheDocument();
  });

  it("Should renders the favorite icon", () => {
    render(<LikeButton isFavorite={true} onToggle={handler} />);

    const isLikedIcon = screen.getByText(/favorite/i);
    expect(isLikedIcon).toBeInTheDocument();
  });

  it("Should toggle the favorite icon", () => {
    render(<LikeButton isFavorite={false} onToggle={handler} />);

    const isNotLikedIcon = screen.getByText(/favorite_border/i);
    expect(isNotLikedIcon).toBeInTheDocument();

    userEvent.click(isNotLikedIcon);

    const isLikedIcon = screen.getByText(/favorite/i);
    expect(isLikedIcon).toBeInTheDocument();
  });
});
