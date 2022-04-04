import React from "react";

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Tweet from "../Tweet";

const TWEET = {
  id: "1",
  account: "account",
  content: "content",
  timestamp: 1,
  isLiked: false,
};

const handler = jest.fn();

describe("Tweet tests", () => {
  it("Should renders the tweet info", () => {
    render(<Tweet tweetInfo={TWEET} onLikeToggle={handler} />);

    const tweetContent = screen.getByTestId("tweet-content");
    const tweetAccount = screen.getByTestId("tweet-account");

    expect(tweetContent).toBeInTheDocument();
    expect(tweetAccount).toBeInTheDocument();
  });
});
